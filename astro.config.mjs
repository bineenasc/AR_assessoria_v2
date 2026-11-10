import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './site.config.mjs';

// Site 100% estático (SSG): gera HTML na pasta dist/, sem servidor e sem adaptadores.
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: { inlineStylesheets: 'auto' },
});
