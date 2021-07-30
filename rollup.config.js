import typescript from "@rollup/plugin-typescript";
import styles from "rollup-plugin-styles";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [styles(),typescript()],
};
