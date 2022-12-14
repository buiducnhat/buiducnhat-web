const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bùi Đức Nhật',
  tagline: 'A Software Developer and an open source lover from Vietnam 🇻🇳🇻🇳🇻🇳',
  url: 'https://buiducnhat.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'buiducnhat',
  projectName: 'buiducnhat.me',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: './data/series',
          sidebarPath: require.resolve('./series.sidebars.js'),
          routeBasePath: '/series',
          editUrl: 'https://github.com/buiducnhat/buiducnhat.me',
        },
        blog: {
          path: './data/blogs',
          routeBasePath: '/blogs',
          showReadingTime: true,
          editUrl: 'https://github.com/buiducnhat/buiducnhat.me',
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
      navbar: {
        title: 'Bùi Đức Nhật',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Series',
          },
          {
            type: 'dropdown',
            label: 'Blogs',
            to: '/blogs',
            items: [{ to: '/blogs/tags', label: 'All tags' }],
            position: 'left',
          },
          { to: '/portfolio', label: 'Portfolio', position: 'left' },
          { to: '/about', label: 'About', position: 'left' },
          {
            href: 'https://github.com/buiducnhat/buiducnhat.me',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/buiducnhat47',
              },
              {
                label: 'Email',
                href: 'mailto:nhaths4701@gmail.com',
              },
              {
                label: 'Github',
                href: 'https://github.com/buiducnhat',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blogs',
              },
              {
                label: 'Series',
                to: '/series',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} buiducnhat.me`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '2EA7E19DKR',
        apiKey: '2bbad1e4ab450747b0e31a113b09f6b6',
        indexName: 'dev_buiducnhat',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),

  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
