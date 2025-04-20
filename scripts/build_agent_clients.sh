#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Determine absolute paths
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/.." &> /dev/null && pwd )"
CONFIG_DIR="$PROJECT_ROOT/config/agents"
MAIN_CONFIG_FILE="$CONFIG_DIR/agents.config.json" # Main config file listing agents
AGENT_FLOWS_BASE_DIR="$PROJECT_ROOT/src/agent/flows"
MCP_HUB_AGENTS_BASE_DIR="$PROJECT_ROOT/src/mcp_hub/src/agents"
RAW_METADATA_FILE="$PROJECT_ROOT/asset/d365_metadata.xml" # Path relative to project root
TRIMMER_EXE="$PROJECT_ROOT/submodules/EDMXTrimmer/EDMXTrimmer/EDMXTrimmer/bin/Release/net8.0/EDMXTrimmer"
ODATA2TS_BIN="$PROJECT_ROOT/node_modules/.bin/odata2ts"

echo "===== Full Agent Setup & Client Generation Pipeline ====="

# --- Prerequisites ---
echo "[Prerequisite Checks]"
# Check if jq is installed
if ! command -v jq &> /dev/null
then
    echo "Error: jq is not installed. Please install jq (e.g., 'brew install jq' or 'apt-get install jq') to parse the config files."
    exit 1
fi
echo "  jq found."

# Ensure odata2ts is installed
if [ ! -d "$PROJECT_ROOT/node_modules/@odata2ts" ]; then
    echo "Warning: Required '@odata2ts/odata2ts' package not found in root node_modules."
    echo "Attempting to run 'npm install' in project root: $PROJECT_ROOT ..."
    (cd "$PROJECT_ROOT" && pwd && npm install --no-fund --no-audit)
    if [ ! -d "$PROJECT_ROOT/node_modules/@odata2ts" ]; then
       echo "Error: Failed to ensure '@odata2ts/odata2ts' package is installed. Please run 'npm install' manually in the project root."
       exit 1
    fi
fi
echo "  odata2ts found at: $ODATA2TS_BIN"

# Check if main config file exists
if [ ! -f "$MAIN_CONFIG_FILE" ]; then
    echo "Error: Main configuration file not found: $MAIN_CONFIG_FILE"
    exit 1
fi
echo "  Main config file found: $MAIN_CONFIG_FILE"

# Check for Raw Metadata
if [ ! -f "$RAW_METADATA_FILE" ]; then
    echo "Error: Prerequisite raw metadata file not found: $RAW_METADATA_FILE"
    echo "Please ensure this file exists before running the script."
    exit 1
fi
echo "  Raw metadata found: $RAW_METADATA_FILE"

# Check if EDMXTrimmer executable exists
if [ ! -f "$TRIMMER_EXE" ]; then
    echo "Error: Pre-compiled EDMXTrimmer executable not found at: $TRIMMER_EXE"
    echo "Please ensure the EDMXTrimmer project has been built successfully (e.g., run 'dotnet build' in its directory)."
    exit 1
fi
echo "  EDMXTrimmer executable found: $TRIMMER_EXE"
echo "---"


# --- Processing ---
echo "[Step 1] Reading agent list from $MAIN_CONFIG_FILE"
agent_count=$(jq '.agents | length' "$MAIN_CONFIG_FILE")
if [ "$agent_count" -eq 0 ]; then
     echo "Warning: No agents defined in $MAIN_CONFIG_FILE. No setup performed."
     exit 0
fi
echo "Found $agent_count agents defined."

echo "[Step 2] Processing each agent: Setup directories, generate lists, trim metadata, generate client..."

# Define the wildcard list for finance_accounting
FINANCE_WILDCARD_LIST="CustomersV3,Account*,Accrual*,Aging*,Allocation*,Asset*,Audit*,BadDebt*,Balance*,Bank*,Beginning*,Budget*,Cash*,Chart*,Collection*,Consolidate*,Credit*,Currency*,Cust*,DefaultDesc*,Deferrals*,Dimension*,DirectDebit*,Due*,ExchangeRate*,Fiscal*,FixedAsset*,FreeText*,Fund*,GeneralJournal*,GeneralLedger*,Impairment*,Income*,Inflation*,ISR*,Journal*,Ledger*,Legal*,MainAccount*,OpeningSheet*,Payment*,Period*,Posting*,Reconcil*,SAD*,SalesTax*,StandardMain*,Subledger*,Tax*,TransactionPost*,TrialBalance*,UnitOfMeasure*,Unrealized*,ValueModel*,Vend*,Voucher*,WriteOff*,Zakat*"


# Loop through each agent defined in the main config file
for i in $(seq 0 $(($agent_count - 1))); do
    # Extract agent name and config file path using jq
    agent_name=$(jq -r ".agents[$i].name" "$MAIN_CONFIG_FILE")
    agent_config_filename=$(jq -r ".agents[$i].configFile" "$MAIN_CONFIG_FILE")
    agent_specific_config_file="$CONFIG_DIR/$agent_config_filename"

    if [ -z "$agent_name" ] || [ "$agent_name" == "null" ] || [ -z "$agent_config_filename" ] || [ "$agent_config_filename" == "null" ]; then
        echo "Warning: Invalid entry at index $i in $MAIN_CONFIG_FILE. Missing name or configFile. Skipping."
        continue
    fi

    echo "------------------------------------------------------------"
    echo "Processing Agent: $agent_name (config: $agent_config_filename)"
    echo "------------------------------------------------------------"

    # Check if the specific agent config file exists
    if [ ! -f "$agent_specific_config_file" ]; then
        echo "  Error: Specific configuration file not found: $agent_specific_config_file. Skipping agent '$agent_name'."
        continue
    fi

    # Define paths for the current agent
    AGENT_FLOW_DIR="$AGENT_FLOWS_BASE_DIR/$agent_name"
    MCP_HUB_AGENT_DIR="$MCP_HUB_AGENTS_BASE_DIR/$agent_name"
    ENTITY_LIST_FILE="${MCP_HUB_AGENT_DIR}/${agent_name}_entity_list.txt"       # NEW NAMING
    TRIMMED_METADATA_FILE="${MCP_HUB_AGENT_DIR}/${agent_name}_trimmed_metadata.xml" # NEW NAMING
    CLIENT_OUTPUT_DIR="${MCP_HUB_AGENT_DIR}/${agent_name}_client"               # NEW NAMING

    # --- 2a: Create Directories ---
    echo "  [2a] Creating directories..."
    mkdir -p "$AGENT_FLOW_DIR"
    mkdir -p "$MCP_HUB_AGENT_DIR"
    echo "     Created: $AGENT_FLOW_DIR"
    echo "     Created: $MCP_HUB_AGENT_DIR"

    # --- 2b: Generate entity list file ---
    echo "  [2b] Generating entity list file (${agent_name}_entity_list.txt)..."
    jq -r '.entities[]' "$agent_specific_config_file" > "$ENTITY_LIST_FILE"
    entity_count=$(wc -l < "$ENTITY_LIST_FILE" | xargs) # Count lines/entities
    echo "     Created $ENTITY_LIST_FILE with $entity_count entities."

    # --- 2c: Trim Metadata ---
    echo "  [2c] Trimming metadata (${agent_name}_trimmed_metadata.xml)..."

    # Determine the list of entities to keep
    if [ "$agent_name" == "finance_accounting" ]; then
        echo "     Using predefined wildcard list for finance_accounting due to command length issues."
        ENTITY_NAMES_TO_KEEP="$FINANCE_WILDCARD_LIST"
    else
        # Original method for other agents
        ENTITY_NAMES_TO_KEEP=$(cat "$ENTITY_LIST_FILE" | tr '\n' ',' | sed 's/,$//')
        if [ -z "$ENTITY_NAMES_TO_KEEP" ] && [ "$entity_count" -gt 0 ]; then
             # Handle potential empty string from sed if input was just whitespace
             echo "     Warning: Extracted empty entity string despite $entity_count lines. Trimming might be minimal."
        elif [ "$entity_count" -eq 0 ]; then
             echo "     Warning: No entities listed. Trimming will be minimal."
             ENTITY_NAMES_TO_KEEP="" # Ensure it's empty for trimmer if file was empty
        fi
        echo "     Using comma-separated list from file ($entity_count entities)."
    fi

    # Run the trimmer with the determined list
    "$TRIMMER_EXE" \
        --edmxfile "$RAW_METADATA_FILE" \
        --outputfilename "$TRIMMED_METADATA_FILE" \
        --entitiestokeep "$ENTITY_NAMES_TO_KEEP" \
        --verbose
    if [ ! -f "$TRIMMED_METADATA_FILE" ]; then
        echo "     Error: EDMXTrimmer failed to create: $TRIMMED_METADATA_FILE. Skipping client generation for '$agent_name'."
        continue
    fi
    echo "     Trimmed metadata saved to $TRIMMED_METADATA_FILE"

    # --- 2d: Generate TypeScript Client ---
    echo "  [2d] Generating TypeScript client (${agent_name}_client/)..."
    echo "     Changing directory to $MCP_HUB_AGENT_DIR"
    cd "$MCP_HUB_AGENT_DIR" # Change into agent dir for relative paths
    echo "     Running odata-ts generator..."
    "$ODATA2TS_BIN" \
        --source "${agent_name}_trimmed_metadata.xml" \
        --output "${agent_name}_client" \
        --mode "all" \
        --emit-mode "ts" \
        --prettier true \
        --allow-renaming true \
        --tsconfig "$PROJECT_ROOT/tsconfig.json" # Use Absolute Path
    if [ ! -d "${agent_name}_client" ]; then
        echo "     Warning: odata2ts might not have generated the client correctly. Output directory '$CLIENT_OUTPUT_DIR' not found."
    else
         echo "     TypeScript client generated in $CLIENT_OUTPUT_DIR"
    fi
    echo "     Changing directory back to $PROJECT_ROOT"
    cd "$PROJECT_ROOT" # Change back

done

echo "============================================================"
echo "SUCCESS: Full Agent setup and client generation complete!"
echo "Clients generated within respective agent directories in $MCP_HUB_AGENTS_BASE_DIR."
echo "============================================================"

exit 0
