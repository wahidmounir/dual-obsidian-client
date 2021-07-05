import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";

const banner = `/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/
`;

export default {
  input: "src/main.ts",
  output: {
    dir: "dist/Dual",
    sourcemap: "inline",
    format: "cjs",
    exports: "default",
    banner,
  },
  external: ["obsidian"],
  plugins: [
    typescript(),
    nodeResolve({ browser: true }),
    commonjs(),
    copy({
      targets: [
        {
          src: ["src/manifest.json", "src/styles.css", "src/versions.json"],
          dest: ["dist/Dual", "frontend/vault-replica/.obsidian/plugins/Dual"],
        },
      ],
    }),
  ],
};
