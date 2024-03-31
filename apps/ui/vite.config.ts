import react from '@vitejs/plugin-react-swc'
import path from 'path'
import vike from 'vike/plugin'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), vike()],
  resolve: {
    alias: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '#': path.resolve(__dirname, 'src'),
    },
  },
}

export default config
