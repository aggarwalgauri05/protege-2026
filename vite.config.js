import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    // Increase chunk size warning limit to prevent warnings from large dependencies
    chunkSizeWarningLimit: 1600,
    
    // Optimize build performance
    target: 'esnext',
    
    // Rollup options for better chunking
    rollupOptions: {
      output: {
        // Manual chunks to split vendor code from application code
        manualChunks: (id) => {
          // Split node_modules into vendor chunk
          if (id.includes('node_modules')) {
            // You can further split large libraries
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    
    // Increase minify terser options for better compatibility
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  
  // Server configuration for development
  server: {
    port: 3000,
    host: true
  }
})