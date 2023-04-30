const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bùi Đức Nhật',
  tagline: 'SOFTWARE ENGINEER',
  url: 'https://www.buiducnhat.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'buiducnhat',
  projectName: 'buiducnhat-web',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
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
          {
            to: '/series',
            label: 'Series',
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
        additionalLanguages: ['nginx'],
      },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
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
          editUrl: 'https://github.com/buiducnhat/buiducnhat-web/edit/main/',
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
        id: 'cac-stack-docker-huu-ich',
        path: './data/series/cac-stack-docker-huu-ich',
        routeBasePath: '/series/cac-stack-docker-huu-ich',
        sidebarPath: require.resolve('./sidebars/cac-stack-docker-huu-ich.json'),
        editUrl: 'https://github.com/buiducnhat/buiducnhat-web/edit/main/',
      },
    ],
  ],
};

module.exports = config;
