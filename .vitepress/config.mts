import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "XD's Library",
    head: [["link", {
        rel: "icon",
        sizes: "32x32",
        href: "https://raw.githubusercontent.com/XDPXI/XDLib/version/5.X.X/assets/r-icon.png"
    }]],
    description: "This is a library for many uses and is included as an player counter for XDPXI's mods and modpacks!",
    lastUpdated: true,
    metaChunk: true,
    cleanUrls: true,
    themeConfig: {
        logo: 'https://raw.githubusercontent.com/XDPXI/XDLib/version/5.X.X/assets/r-icon.png',

        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'Documentation',
                activeMatch: '^/docs/(?:6\.X\.X|5\.X\.X|3\.X\.X)',
                items: [
                    {text: '3.X.X', link: '/docs/3.X.X/getting-started/adding', activeMatch: '/docs/3.X.X'},
                    {text: '5.X.X', link: '/docs/5.X.X/getting-started/adding', activeMatch: '/docs/5.X.X'},
                    {text: '6.X.X', link: '/docs/6.X.X/getting-started/adding', activeMatch: '/docs/6.X.X'},
                ],
            },
        ],

        sidebar: {
            '/docs/6.X.X': [
                {
                    text: 'Getting Started',
                    collapsed: false,
                    items: [
                        {text: 'Adding to a project', link: '/docs/6.X.X/getting-started/adding'},
                        {text: 'Support', link: '/docs/6.X.X/getting-started/support'},
                    ],
                },
                {
                    text: 'Register',
                    collapsed: true,
                    items: [
                        {text: 'Items', link: '/docs/6.X.X/register/items'},
                        {text: 'Blocks', link: '/docs/6.X.X/register/blocks'},
                        {text: 'Armor', link: '/docs/6.X.X/register/armor'},
                        {text: 'Food', link: '/docs/6.X.X/register/food'},
                        {text: 'Tools', link: '/docs/6.X.X/register/tools'},
                    ],
                },
                {
                    text: 'Client',
                    collapsed: true,
                    items: [
                        {text: 'Language Utilities', link: '/docs/6.X.X/client/lang-utils'},
                    ],
                },
                {
                    text: 'Loader',
                    collapsed: true,
                    items: [
                        {text: 'Mod properties', link: '/docs/6.X.X/loader/mod'},
                    ],
                },
            ],
            '/docs/5.X.X': [
                {
                    text: 'Getting Started',
                    collapsed: false,
                    items: [
                        {text: 'Adding to a project', link: '/docs/5.X.X/getting-started/adding'},
                        {text: 'Support', link: '/docs/5.X.X/getting-started/support'},
                    ],
                },
                {
                    text: 'Register',
                    collapsed: true,
                    items: [
                        {text: 'Items', link: '/docs/5.X.X/register/items'},
                        {text: 'Blocks', link: '/docs/5.X.X/register/blocks'},
                    ],
                },
                {
                    text: 'Client',
                    collapsed: true,
                    items: [
                        {text: 'Language Utilities', link: '/docs/5.X.X/client/lang-utils'},
                    ],
                },
                {
                    text: 'Loader',
                    collapsed: true,
                    items: [
                        {text: 'Mod properties', link: '/docs/5.X.X/loader/mod'},
                    ],
                },
            ],
            '/docs/3.X.X': [
                {
                    text: 'Getting Started',
                    collapsed: false,
                    items: [
                        {text: 'Adding to a project', link: '/docs/3.X.X/getting-started/adding'},
                        {text: 'Support', link: '/docs/3.X.X/getting-started/support'},
                    ],
                },
                {
                    text: 'Register',
                    collapsed: true,
                    items: [
                        {text: 'Items', link: '/docs/3.X.X/register/items'},
                        {text: 'Blocks', link: '/docs/3.X.X/register/blocks'},
                    ],
                },
                {
                    text: 'Client',
                    collapsed: true,
                    items: [
                        {text: 'Language Utilities', link: '/docs/3.X.X/client/lang-utils'},
                        {text: 'Markdown Parser', link: '/docs/3.X.X/client/md-parser'},
                        {text: 'Popup', link: '/docs/3.X.X/client/popup'},
                    ],
                },
                {
                    text: 'Loader',
                    collapsed: true,
                    items: [
                        {text: 'Mod properties', link: '/docs/3.X.X/loader/mod'},
                    ],
                },
            ],
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/xdpxi/xdlib'},
            {icon: 'modrinth', link: 'https://modrinth.com/plugin/xdlib'},
            {icon: 'discord', link: 'https://discord.gg/2y6EXbwgmQ'},
        ],

        editLink: {
            pattern: 'https://github.com/xdpxi/xdlib-docs/edit/main/:path'
        },

        footer: {
            message: 'NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG.',
            copyright: 'Copyright © 2024-2025 XDPXI'
        }
    }
})
