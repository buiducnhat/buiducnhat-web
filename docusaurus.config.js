const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bùi Đức Nhật',
  tagline: 'SOFTWARE ENGINEER',
  url: 'https://buiducnhat.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'buiducnhat',
  projectName: 'buiducnhat.me',

  i18n: {
    defaultLocale: 'vi',
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
        gtag: {
          trackingID: 'G-0J6K7X5LV7',
          anonymizeIP: true,
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
          src: 'img/logo-light.png',
          srcDark: 'img/logo-dark.png',
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
        appId: '910OS4PMJA',
        apiKey: '5b562fa43586ae1cb2d043816f6d2e31',
        indexName: 'buiducnhat.me',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),

  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
