import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import remarkNbsp from './plugins/remark-nbsp.mjs';

// Quan sàpigues la URL final, afegeix-la aquí: site: 'https://el-teu-lloc.netlify.app'
export default defineConfig({
  integrations: [mdx()],
  // smartypants desactivat: així els apòstrofs i les cometes es mantenen tal com s'escriuen.
  markdown: { processor: unified({ remarkPlugins: [remarkNbsp], smartypants: false }) },
  build: {
    // Tot en fitxers externs: així la política CSP de netlify.toml pot ser estricta.
    inlineStylesheets: 'never',
  },
  vite: {
    build: { assetsInlineLimit: 0 },
  },
});
