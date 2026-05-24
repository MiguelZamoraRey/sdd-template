// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [],

  // Build options
  build: {
    // Inline small assets as base64 to reduce requests
    inlineStylesheets: 'auto',
  },

  // Vite config passthrough
  vite: {
    // Ensure CSS variables are available globally
    css: {
      devSourcemap: true,
    },
  },
});
