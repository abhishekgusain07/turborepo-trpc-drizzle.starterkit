import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/button.tsx", "src/card.tsx", "src/code.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  external: ["react"],
  sourcemap: true,
  ...options,
}));