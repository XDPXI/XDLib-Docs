import {defineConfig} from 'vitepress'

export default defineConfig({
  title: "XD's Library",
  description: "This is a library for many uses and is included as an player counter for XDPXI's mods and modpacks!",
  themeConfig: {
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
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xdpxi/xdlib' },
      { icon: 'modrinth', link: 'https://modrinth.com/plugin/xdlib' },
      { icon: 'discord', link: 'https://discord.gg/2y6EXbwgmQ' },
    ]
  }
})
