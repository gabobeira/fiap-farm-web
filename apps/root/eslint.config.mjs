import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { config as baseConfig } from "@repo/eslint-config/base";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...baseConfig,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
