// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ask! documentation',
  tagline: 'documentation for Ask!',
  url: 'https://github.com/ask-lang/ask',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'ask-lang',
  projectName: 'ask-docs',
  stylesheets: [
    'fonts/fonts.css'
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ask-lang/ask-docs/edit/main/',
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ask-lang/ask-docs/edit/main/',
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
        title: '',
        // logo: {
        //   alt: 'Ask!',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            href: 'https://github.com/ask-lang/ask',
            label: 'Ask! GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/ask-lang/ask-docs',
            label: 'Docs GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  // plugins: [require.resolve('docusaurus-plugin-search-local')],
};

module.exports = config;
