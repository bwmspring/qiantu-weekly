// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
import netlify from '@astrojs/netlify/functions';

import { remarkReadingTime } from "./src/utils/all";

export default defineConfig({
  site: "https://stablo-astro.web3templates.com",
  // output: 'server',
  // adapter: vercel(),
  output: 'server',
  adapter: netlify(),
  experimental: {
    contentCollections: true,
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: ["rehype-plugin-image-native-lazy-loading"],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
  ],
});
