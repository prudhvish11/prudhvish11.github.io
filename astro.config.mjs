// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // TODO: update to the final production domain before launch (custom domain or
  // static host URL) — this drives canonical URLs, sitemap, and OG tags.
  site: 'https://prudhvish11.github.io',
  trailingSlash: 'never',
  integrations: [sitemap(), mdx()],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
