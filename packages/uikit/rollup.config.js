import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
import path from "path";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const globals = {
  react: "React",
  "react-dom": "ReactDom",
  "styled-components": "styled"
};

const external = Object.keys(globals).concat(["stream"]);

const buildName = "monorepo-uikit";
const DIST_DIR = path.resolve(__dirname, "dist");

export default {
  plugins: [
    typescript(),

    // Allows node_modules resolution
    nodeResolve({ extensions, preferBuiltins: false }),
    babel({
      extensions,
      include: ["src/**/*"],
      configFile: "../../babel.config.js",
      exclude: "**/node_modules/**"
    }),
    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs()
  ],
  input: "./src/index.tsx",

  external,

  output: [
    {
      file: `${DIST_DIR}/${buildName}.cjs.js`,
      format: "cjs",
      globals
    },
    {
      file: `${DIST_DIR}/${buildName}.es.js`,
      format: "es",
      globals
    }
  ]
};
