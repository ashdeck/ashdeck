import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import generouted from "@generouted/react-router/plugin"
import tsconfigPaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"
import Terminal from "vite-plugin-terminal"

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 8500,
	},
	plugins: [
		react(),
		tsconfigPaths(),
		svgr(),
		generouted({
			output: "./src/commons/router/router.ts",
		}),
		Terminal({
			output: ["console", "terminal"],
		}),
	],
})
