import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Wilderion Wiki',
  tagline: 'Документация проекта Wilderion',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://wiki.wilderion.ru',
  baseUrl: '/',

  organizationName: 'wilderion',
  projectName: 'wiki',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    localeConfigs: {
      ru: {
        label: 'Русский',
        htmlLang: 'ru-RU',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/wiselder/wilderion-wiki/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/wilderion-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Wilderion Wiki',
      logo: {
        alt: 'Логотип Wilderion',
        src: 'img/logo.png',
        href: '/docs/intro',
      },
      items: [
        {
          href: 'https://wilderion.ru',
          label: 'Сайт',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://discord.com/invite/S4DGsremCC',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://t.me/wilderion_project',
          label: 'Telegram',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Серверы',
          items: [
            {
              label: 'Overnight',
              to: '/docs/servers/overnight',
            },
            {
              label: 'Sunrise',
              to: '/docs/servers/sunrise',
            },
            {
              label: 'Twilight',
              to: '/docs/servers/twilight',
            },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/S4DGsremCC',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/wilderion_project',
            },
            {
              label: 'VK',
              href: 'https://vk.com/wilderion',
            },
          ],
        },
        {
          title: 'Ресурсы',
          items: [
            {
              label: 'Сайт проекта',
              href: 'https://wilderion.ru',
            },
            {
              label: 'Карта Overnight',
              href: 'http://overnight.wilderion.ru:8100/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Wilderion Project`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
