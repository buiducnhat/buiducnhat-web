const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bùi Đức Nhật',
  tagline: 'SOFTWARE ENGINEER',
  url: 'https://buiducnhat.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'buiducnhat',
  projectName: 'buiducnhat.github.io',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'vi',
    locales: ['en', 'vi'],
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Bùi Đức Nhật',
        logo: {
          alt: 'Logo',
          src: 'img/logo-light.png',
          srcDark: 'img/logo-dark.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'dropdown',
            label: 'Blogs',
            to: '/blogs',
            items: [
              { to: '/blogs', label: 'All blogs' },
              { to: '/blogs/tags', label: 'All tags' },
            ],
            position: 'left',
          },
          { to: '/portfolio', label: 'Portfolio', position: 'left' },
          { to: '/about', label: 'About', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
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
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} buiducnhat`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '7L0K0UP9DZ',
        apiKey: '818de3be346ad79a1d0be2704fa38d85',
        indexName: 'buiducnhat-github-io',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          path: './data/blogs',
          routeBasePath: '/blogs',
          showReadingTime: true,
          editUrl: 'https://github.com/buiducnhat/buiducnhat.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: process.env.GA_TRACKING_ID,
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: process.env.GA_TRACKING_ID,
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },

    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'useful-docker-stacks',
        path: './data/useful-docker-stacks',
        routeBasePath: '/useful-docker-stacks',
        sidebarPath: require.resolve('./sidebars/useful-docker-stacks.sidebar.json'),
      },
    ],
  ],
};

module.exports = config;
