import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  // eslint react config
  {
    files: ["**/*.{ts,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      }
    },
    plugins: {
      react: pluginReact.configs.flat.recommended.plugins.react,
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      "no-console": "warn",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];