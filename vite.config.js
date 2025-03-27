import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import metaMapPlugin from 'vite-plugin-react-meta-map'

export default defineConfig({
  plugins: [
    react(),
    metaMapPlugin({
      pageMetaMapFilePath: "./src/pageMetaMap.ts",
      pageTemplateFilePath: "./src/PageTemplate.tsx",
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true
  }
})
