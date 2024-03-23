import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import generouted from "@generouted/react-router/plugin"
import tsconfigPaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		react(),
		tsconfigPaths(),
		svgr(),
		generouted()],
})
