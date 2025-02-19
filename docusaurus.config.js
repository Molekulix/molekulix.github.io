// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const redirects = require('./redirects');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Venom Docs',
  tagline: 'Venom is a blockchain network focused on the Middle East and North Africa region as well as emerging economies worldwide to provide robust infrastructure for CBDC products and Web 3.0 applications',
  url: 'https://venom.foundation/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        ...redirects
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
      },
      navbar: {
        title: 'Venom',
        items: [
          {
            type: 'doc',
            docId: 'start/general/welcome-to-venom',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'build/development-guides/readme',
            position: 'left',
            label: 'Build',
          },
          {
            type: 'doc',
            docId: 'standards/readme',
            position: 'left',
            label: 'Standards',
          },
          {
            href: 'https://forum.venom.foundation',
            label: 'Forum',
            position: 'right',
          },
          {
            href: 'https://github.com/venom-blockchain/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'General',
                to: 'general/readme',
              },
              {
                label: 'Learn',
                to: 'learn/glossary',
              },
              {
                label: 'Build',
                to: 'build/development-guides',
              },
              {
                label: 'Maintain',
                to: 'maintain/network-maintainers',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/venomblockchain',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/QsVypuKbZj',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/venomfoundation',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@venom.foundation',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/venom-blockchain',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Venom Foundation`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
    }),
};

module.exports = config;
