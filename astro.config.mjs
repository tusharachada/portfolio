// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Used for SEO tags & canonical URLs. Update if the domain ever changes.
  site: 'https://tusharachada.com',

  adapter: cloudflare(),
});