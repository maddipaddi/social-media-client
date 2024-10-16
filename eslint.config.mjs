import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    // Define environment for both browser and Node.js
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,  // Include Node.js globals like 'require' and 'module'
      },
    },
  },
  {
    // Specific config for Jest test files
    files: ["**/*.test.js", "**/__tests__/**/*.js"],  // Apply this config to test files
    languageOptions: {
      globals: {
        ...globals.jest,  // Jest globals like 'test' and 'expect'
      },
    },
  },
];
