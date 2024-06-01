import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import auth from 'auth-astro';
import solidJs from '@astrojs/solid-js';
import partytown from '@astrojs/partytown';
import react from "@astrojs/react";
import { loadEnv } from 'vite';

const ENV_VARIABLES = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  prefetch: {
    defaultStrategy: 'hover'
  },
  // prefetch link on hover
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    sitemap(),
    tailwind(),
    auth(),
    partytown(),
    solidJs({
      devtools: true,
      include: ['**/solid/*']
    }),
    react({
      include: ['**/react/*'],
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'dracula'
      },
      // remarkPlugins: [remarkToc],
      // rehypePlugins: [rehypeMinifyHtml],
      remarkRehype: {
        footnoteLabel: 'Footnotes'
      },
      gfm: false
    })
  ]
});
