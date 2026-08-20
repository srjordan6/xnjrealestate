import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://xnjrealestate.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ko', 'es'],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', zh: 'zh-Hans', ko: 'ko-KR', es: 'es-US' }
      }
    })
  ]
});
