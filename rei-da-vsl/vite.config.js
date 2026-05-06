import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        formulario: resolve(__dirname, 'formulario.html'),
        servico: resolve(__dirname, 'servico/index.html'),
        infoproduto: resolve(__dirname, 'infoproduto/index.html'),
        nutra: resolve(__dirname, 'nutra/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: '/',
  },
})
