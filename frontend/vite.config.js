import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		// vite.config.js
proxy: {
  '/api': {
    target: 'http://localhost:3001', // Changed from 3000 to 3001
    changeOrigin: true,
  }
}
	},
});
