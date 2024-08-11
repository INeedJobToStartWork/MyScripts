import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	target: "es2022",
	format: ["esm"],
	clean: true,
	splitting: false,
	platform: "node",
	keepNames: true,
	dts: false, // It's not external package
	tsconfig: "./tsconfig.json"
});
