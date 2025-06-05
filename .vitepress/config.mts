import {defineConfig} from 'vitepress'

export default defineConfig({
  title: "XD's Library",
  head: [["link", { rel: "icon", sizes: "32x32", href: "https://raw.githubusercontent.com/XDPXI/XDLib/version/5.X.X/assets/r-icon.png" }]],
  description: "This is a library for many uses and is included as an player counter for XDPXI's mods and modpacks!",
  lastUpdated: true,
  metaChunk: true,
  cleanUrls: true,
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/XDPXI/XDLib/version/5.X.X/assets/r-icon.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Support', link: '/docs/getting-started/support' },
      { text: 'Documentation', link: '/docs/getting-started/adding', activeMatch: '^/docs(?!/getting-started/support)' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          {text: 'Adding to a project', link: '/docs/getting-started/adding'},
          {text: 'Support', link: '/docs/getting-started/support'},
        ]
      },
      {
        text: 'Register',
        collapsed: true,
        items: [
          {text: 'Items', link: '/docs/register/items'},
          {text: 'Blocks', link: '/docs/register/blocks'},
          {text: 'Armor', link: '/docs/register/armor'},
          {text: 'Food', link: '/docs/register/food'},
          {text: 'Tools', link: '/docs/register/tools'},
        ]
      },
      {
        text: 'Client',
        collapsed: true,
        items: [
          {text: 'Language Utilities', link: '/docs/client/lang-utils'},
        ]
      },
      {
        text: 'Loader',
        collapsed: true,
        items: [
          {text: 'Mod properties', link: '/docs/register/mod'},
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xdpxi/xdlib' },
      { icon: 'modrinth', link: 'https://modrinth.com/plugin/xdlib' },
      { icon: 'discord', link: 'https://discord.gg/2y6EXbwgmQ' },
    ],

    editLink: {
      pattern: 'https://github.com/xdpxi/xdlib-docs/edit/main/:path'
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: 'NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG.',
      copyright: 'Copyright © 2024-2025 XDPXI'
    }
  }
})
