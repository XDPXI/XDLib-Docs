import { defineConfig } from "vitepress";

export default defineConfig({
  title: "XD's Library",
  head: [
    [
      "link",
      {
        rel: "icon",
        sizes: "32x32",
        href: "https://raw.githubusercontent.com/XDPXI/XDLib/version/v5/assets/r-icon.png",
      },
    ],
  ],
  description:
    "This is a library for many uses and is included as an player counter for XDPXI's mods and modpacks!",
  lastUpdated: true,
  metaChunk: true,
  cleanUrls: true,
  themeConfig: {
    logo: "https://raw.githubusercontent.com/XDPXI/XDLib/version/v5/assets/r-icon.png",

    nav: [
      { text: "Home", link: "/" },
      {
        text: "Documentation",
        activeMatch: "^/docs/(?:v1|v2|v3|v4|v5|v6)",
        items: [
          {
            text: "v1 (❌)",
            link: "/docs/v1/getting-started/adding",
            activeMatch: "/docs/v1",
          },
          {
            text: "v2 (❌)",
            link: "/docs/v2/getting-started/adding",
            activeMatch: "/docs/v2",
          },
          {
            text: "v3 (❌)",
            link: "/docs/v3/getting-started/adding",
            activeMatch: "/docs/v3",
          },
          {
            text: "v4 (❌)",
            link: "/docs/v4/getting-started/adding",
            activeMatch: "/docs/v4",
          },
          {
            text: "v5 (❌)",
            link: "/docs/v5/getting-started/adding",
            activeMatch: "/docs/v5",
          },
          {
            text: "v6 (❌)",
            link: "/docs/v6/getting-started/adding",
            activeMatch: "/docs/v6",
          },
          {
            text: "v7 (✅)",
            link: "/docs/v6/getting-started/adding",
            activeMatch: "/docs/v6",
          },
        ],
      },
    ],

    sidebar: {
      "/docs/v6": [
        {
          text: "Getting Started",
          collapsed: false,
          items: [
            {
              text: "Adding to a project",
              link: "/docs/v6/getting-started/adding",
            },
            { text: "Support", link: "/docs/v6/getting-started/support" },
          ],
        },
        {
          text: "Register",
          collapsed: true,
          items: [
            { text: "Items", link: "/docs/v6/register/items" },
            { text: "Blocks", link: "/docs/v6/register/blocks" },
          ],
        },
        {
          text: "Client",
          collapsed: true,
          items: [
            { text: "Language Utilities", link: "/docs/v6/client/lang-utils" },
            { text: "Mod Menu", link: "/docs/v6/client/mod-menu" },
          ],
        },
        {
          text: "Loader",
          collapsed: true,
          items: [{ text: "Mod properties", link: "/docs/v6/loader/mod" }],
        },
      ],
      "/docs/v5": [
        {
          text: "Getting Started",
          collapsed: false,
          items: [
            {
              text: "Adding to a project",
              link: "/docs/v5/getting-started/adding",
            },
            { text: "Support", link: "/docs/v5/getting-started/support" },
          ],
        },
        {
          text: "Register",
          collapsed: true,
          items: [
            { text: "Items", link: "/docs/v5/register/items" },
            { text: "Blocks", link: "/docs/v5/register/blocks" },
          ],
        },
        {
          text: "Client",
          collapsed: true,
          items: [
            { text: "Language Utilities", link: "/docs/v5/client/lang-utils" },
          ],
        },
        {
          text: "Loader",
          collapsed: true,
          items: [{ text: "Mod properties", link: "/docs/v5/loader/mod" }],
        },
      ],
      "/docs/v4": [
        {
          text: "Getting Started",
          collapsed: false,
          items: [
            {
              text: "Adding to a project",
              link: "/docs/v4/getting-started/adding",
            },
            { text: "Support", link: "/docs/v4/getting-started/support" },
          ],
        },
      ],
      "/docs/v3": [
        {
          text: "Getting Started",
          collapsed: false,
          items: [
            {
              text: "Adding to a project",
              link: "/docs/v3/getting-started/adding",
            },
            { text: "Support", link: "/docs/v3/getting-started/support" },
          ],
        },
        {
          text: "Register",
          collapsed: true,
          items: [
            { text: "Items", link: "/docs/v3/register/items" },
            { text: "Blocks", link: "/docs/v3/register/blocks" },
          ],
        },
        {
          text: "Client",
          collapsed: true,
          items: [
            { text: "Language Utilities", link: "/docs/v3/client/lang-utils" },
            { text: "Markdown Parser", link: "/docs/v3/client/md-parser" },
            { text: "Popup", link: "/docs/v3/client/popup" },
          ],
        },
        {
          text: "Loader",
          collapsed: true,
          items: [{ text: "Mod properties", link: "/docs/v3/loader/mod" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/xdpxi/xdlib" },
      { icon: "modrinth", link: "https://modrinth.com/plugin/xdlib" },
      { icon: "discord", link: "https://discord.gg/2y6EXbwgmQ" },
    ],

    editLink: {
      pattern: "https://github.com/xdpxi/xdlib-docs/edit/main/:path",
    },

    footer: {
      message:
        "NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG.",
      copyright: "Copyright © 2024-2025 XDPXI",
    },
  },
});
