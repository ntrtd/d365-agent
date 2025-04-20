import { ConfigFileOptions, EmitModes, Modes } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
  // Specifies the location of the tsconfig.json file relative to this config file
  tsconfig: "../tsconfig.json", 
  debug: false,
  mode: Modes.all, // Generate models, query objects, and services
  emitMode: EmitModes.ts, // Generate TypeScript files
  prettier: true, // Format generated files using prettier
  allowRenaming: true, // Allows renaming entities & properties
  naming: {
    models: {
        // Example: suffix: "DTO"
    },
    queryObjects: {
        // Example: suffix: "Q"
    },
    services: {
        // Example: suffix: "Service"
    }
  },
  services: {
    d365: { // Service name, can be customized
      source: "d365_metadata.xml", // Path relative to this config file inside odata-gen/
      output: "../src/generated/d365_client", // Output directory relative to this config file
    },
  },
};

export default config;
