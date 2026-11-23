// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Food Insecurity at UCSB',
  tagline: 'Papers on issues of interest to Isla Vista residents',
  favicon: 'img/palm.svg',

  future: {},

  url: 'https://apacheco12345.github.io',
  baseUrl: '/TuesdayClass/',
  organizationName: 'apacheco12345',
  projectName: 'TuesdayClass',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'paper',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/palm.svg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Food Insecurity at UCSB',
        logo: {
          alt: 'Series mark',
          src: 'img/palm.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Table of Contents',
          },
          {
            href: 'https://github.com/apacheco12345/TuesdayClass',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
