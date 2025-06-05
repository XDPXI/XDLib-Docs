import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "XD's Library",
  description: "This is a library for many uses and is included as an player counter for XDPXI's mods and modpacks!",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Support', link: '/support' },
      { text: 'Documentation', link: '/docs' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Support', link: '/docs/getting-started/support' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xdpxi/xdlib' },
      { icon: 'modrinth', link: 'https://modrinth.com/plugin/xdlib' }
    ]
  }
})
