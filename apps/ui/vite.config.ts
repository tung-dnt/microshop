import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import copy from 'rollup-plugin-copy';
import { defineConfig, loadEnv, normalizePath } from 'vite';

import { dependencies } from './package.json';

function getRootRelativePath(subPath: string) {
  return normalizePath(resolve(__dirname, subPath));
}

function renderChunks(deps: Record<string, string>) {
  const chunks: { [key: string]: string[] } = {};
  const vendorChunk: string[] = [];

  // Object.keys(deps).forEach((key) => {
  //   if (['some-library'].includes(key)) {
  //     chunks[key] = [key];

  //     return;
  //   }

  //   vendorChunk.push(key);
  // });

  chunks.vendor = vendorChunk;

  return chunks;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isMock = env.VITE_MOCK === 'true';

  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  }

  return {
    plugins: [
      react(),
      isMock &&
        copy({
          targets: [
            {
              src: getRootRelativePath('./mocks'),
              dest: getRootRelativePath('./public'),
            },
          ],
          hook: 'buildStart',
        }),
    ],
    server: {
      host: true, // To expose Vite server to Docker network
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            ...renderChunks(dependencies),
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  }
})
