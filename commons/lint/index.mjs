import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
    }
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      'react/react-in-jsx-scope': 0
    }
  },
  {
    ignores: [
      "node_modules/*",
      ".next"
    ],
  }
];
