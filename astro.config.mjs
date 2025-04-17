// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";
import starlightThemeFlexoki from "starlight-theme-flexoki";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
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
          href: "https://github.com/withastro/starlight",
        },
      ],
      customCss: ["./styles.css"],
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
});
