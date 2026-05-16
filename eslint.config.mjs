import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    files: ["next.config.js"],
    rules: {
      // Next.js CJS config uses require(); TypeScript ESLint forbids it by default.
      "@typescript-eslint/no-require-imports": "off",
    },
  },
]);

export default eslintConfig;
