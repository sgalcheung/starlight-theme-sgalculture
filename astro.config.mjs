// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";
import starlightThemeFlexoki from "starlight-theme-flexoki";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Sgalculture Theme",
      pagination: false,
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/sgalcheung/starlight-theme-sgalculture",
        },
      ],
      customCss: ["./src/styles/starlight.css"],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "MWeb-thems",
          autogenerate: { directory: "mweb-themes" },
        },
      ],
      components: {
        TableOfContents: "./src/overrides/TableOfContents.astro",
      },
      routeMiddleware: "./src/routeMiddleware.ts",
      plugins: [
        starlightThemeFlexoki({
          accentColor: "blue",
        }),
      ],
    }),
  ],

  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },
});
