import globals from "globals";
import pluginJs from "@eslint/js";

import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    
    languageOptions: { 
      globals: globals.browser,
    },
  
    extends: [
      pluginJs.configs.recommended,
      prettierConfig,
    ], 

    rules: {
      ...prettier.rules,

      "prettier/prettier": [
       "error",
       {
        singleQuote: false,
        semi: true,
        trailingComma: "es5",
       },
     ],
   },
 },
];