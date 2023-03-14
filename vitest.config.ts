/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	test: {
		globals: true,
		environment: "happy-dom",
	},
	plugins: [react()],
});
