import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '@': resolve(__dirname, 'src'),
    },
  },
})
