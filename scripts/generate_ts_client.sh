#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# --- Configuration ---
# Determine absolute paths
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )" # Absolute path to script dir
PROJECT_ROOT="$( cd "$SCRIPT_DIR/.." &> /dev/null && pwd )" # Absolute path to project root
ODATA_GEN_DIR="$PROJECT_ROOT/odata-gen"
TRIMMER_PROJ="$PROJECT_ROOT/submodules/EDMXTrimmer/EDMXTrimmer/EDMXTrimmer/EDMXTrimmer.csproj"

# Files within odata-gen directory
RAW_METADATA_FILE="$ODATA_GEN_DIR/d365_metadata.xml"
ENTITY_LIST_FILE="$ODATA_GEN_DIR/entity_list.txt" 
TRIMMED_METADATA_FILE="$ODATA_GEN_DIR/trimmed_metadata_essential.xml" # Trimmer output, odata-ts input
# ---------------------

echo "===== Dynamics 365 TypeScript Client Generation Pipeline ====="

# --- Step 1: Check for Raw Metadata ---
echo "[Step 1/4] Checking for raw metadata file in odata-gen/..."
# Assuming the download script places the file in odata-gen or it was moved there.
if [ ! -f "$RAW_METADATA_FILE" ]; then
    echo "Error: Raw metadata file not found: $RAW_METADATA_FILE"
    echo "Please ensure the metadata file exists in the 'odata-gen' directory."
    exit 1
fi
echo "Found raw metadata: $RAW_METADATA_FILE"

# --- Step 2: Prepare Entity List (Placeholder) ---
echo "[Step 2/4] Preparing entity list (Placeholder: First 100 from odata-gen/entity_list.txt)..."
# Ensure the entity list file exists in odata-gen. If not, create it there.
if [ ! -f "$ENTITY_LIST_FILE" ]; then
    echo "Warning: Entity list file not found: $ENTITY_LIST_FILE."
    echo "Creating it now by extracting all entities from $RAW_METADATA_FILE..."
    grep '<EntityType Name="' "$RAW_METADATA_FILE" | sed 's/.*EntityType Name="\([^"]*\)".*/\1/' | sort > "$ENTITY_LIST_FILE"
    echo "Created $ENTITY_LIST_FILE"
fi

# IMPORTANT: This uses the first 100 entities as a PLACEHOLDER.
# For a functional client, update $ENTITY_LIST_FILE or this logic 
# to include ALL entities essential for your application.
# Use tr to replace newlines with commas, then sed to remove the trailing comma
ENTITY_NAMES_TO_KEEP=$(head -n 100 "$ENTITY_LIST_FILE" | tr '\n' ',' | sed 's/,$//')

if [ -z "$ENTITY_NAMES_TO_KEEP" ]; then
    echo "Error: Failed to read entity names from $ENTITY_LIST_FILE. Cannot proceed."
    exit 1
fi
echo "Using first 100 entities from $ENTITY_LIST_FILE as placeholder."

# --- Step 3: Trim Metadata using EDMXTrimmer ---
echo "[Step 3/4] Trimming metadata..."
# Ensure the trimmer project is built (dotnet run builds if necessary)
echo "Building EDMXTrimmer (if needed)..."
dotnet build "$TRIMMER_PROJ" -c Release -f net8.0 --nologo -v q

echo "Running EDMXTrimmer..."
dotnet run --project "$TRIMMER_PROJ" --configuration Release --no-build -- \
    --edmxfile "$RAW_METADATA_FILE" \
    --outputfilename "$TRIMMED_METADATA_FILE" \
    --entitiestokeep "$ENTITY_NAMES_TO_KEEP" \
    --verbose

if [ ! -f "$TRIMMED_METADATA_FILE" ]; then
    echo "Error: EDMXTrimmer failed to create the trimmed metadata file: $TRIMMED_METADATA_FILE"
    exit 1
fi
echo "Trimmed metadata saved to $TRIMMED_METADATA_FILE"

# --- Step 4: Generate TypeScript Client using odata-ts ---
echo "[Step 4/4] Generating TypeScript client..."
# Navigate to the directory containing the odata2ts config file
cd "$ODATA_GEN_DIR"

# Ensure node_modules are installed in the root for npx odata2ts to work correctly
# Check specifically for the @odata2ts package which is needed.
if [ ! -d "$PROJECT_ROOT/node_modules/@odata2ts" ]; then
    echo "Warning: Required '@odata2ts/odata2ts' package not found in root node_modules."
    echo "Attempting to run 'npm install' in project root: $PROJECT_ROOT ..."
    # Use absolute project root path for cd within subshell
    (cd "$PROJECT_ROOT" && pwd && npm install --no-fund --no-audit)
    # Re-check after install attempt
    if [ ! -d "$PROJECT_ROOT/node_modules/@odata2ts" ]; then
       echo "Error: Failed to ensure '@odata2ts/odata2ts' package is installed. Please run 'npm install' manually in the project root."
       exit 1
    fi
fi

# Run odata2ts using the config file (odata2ts.config.ts) in the current directory (odata-gen)
# Use the odata2ts executable from the root node_modules
echo "Running odata-ts generator..."
"$PROJECT_ROOT/node_modules/.bin/odata2ts"

# Navigate back to the project root directory
cd "$PROJECT_ROOT"

echo "------------------------------------------------------------"
echo "SUCCESS: TypeScript client generation pipeline complete!"
echo "Output located in: src/generated/d365_client"
echo "NOTE: The client was generated using a PLACEHOLDER list of the first 100 entities."
echo "Review $ENTITY_LIST_FILE and update the script or list for production use."
echo "============================================================"

exit 0
