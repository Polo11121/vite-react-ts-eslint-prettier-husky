import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      reporter: ['text', 'html']
    },
    exclude: [...configDefaults.exclude]
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
