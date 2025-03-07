import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // We'll output everything into "dist"
    outDir: 'dist',
    rollupOptions: {
      // Since we want to use the extension as a popup, treat index.html as the entry point.
      input: {
        popup: 'index.html'
      },
      output: {
        // We'll keep the same name for convenience
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
