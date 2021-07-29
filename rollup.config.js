import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-import-css";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [typescript(), css()],
};
