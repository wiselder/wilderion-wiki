import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    'quick-start',
    'rules',
    {
      type: 'category',
      label: 'Серверы',
      collapsed: false,
      items: [
        'servers/overnight',
        'servers/sunrise',
        'servers/twilight',
        'servers/eclipse',
      ],
    },
    {
      type: 'category',
      label: 'Плагины',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Собственные',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Собственные плагины',
            description: 'Плагины, разработанные командой Wilderion',
          },
          items: [
            {
              type: 'category',
              label: 'Защита (Hammer)',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'plugins/custom/hammer/index',
              },
              items: [
                'plugins/custom/hammer/newbie-protection',
              ],
            },
            {
              type: 'category',
              label: 'Комфорт (Qolity)',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'plugins/custom/qolity/index',
              },
              items: [
                'plugins/custom/qolity/anvil',
                'plugins/custom/qolity/elytra',
                'plugins/custom/qolity/item-frames',
                'plugins/custom/qolity/light-blocks',
                'plugins/custom/qolity/mob-tweaks',
              ],
            },
            {
              type: 'category',
              label: 'Портреты (Art)',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'plugins/custom/art/index',
              },
              items: [
                'plugins/custom/art/portraits',
              ],
            },
            {
              type: 'category',
              label: 'Система (Nexus)',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'plugins/custom/nexus/index',
              },
              items: [
                'plugins/custom/nexus/afk',
                'plugins/custom/nexus/links',
              ],
            },
            {
              type: 'doc',
              id: 'plugins/custom/bridges/bridges',
              label: 'Bridges',
            },
          ],
        },
        {
          type: 'category',
          label: 'Сторонние',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Сторонние плагины',
            description: 'Плагины и моды от других разработчиков',
          },
          items: [
            'plugins/third-party/chat',
            'plugins/third-party/voice-chat',
            'plugins/third-party/axiom',
            'plugins/third-party/plots',
            'plugins/third-party/bluemap',
            'plugins/third-party/tab',
            'plugins/third-party/gsit',
            'plugins/third-party/skin-restorer',
            'plugins/third-party/coordinate-offset',
            'plugins/third-party/coreprotect',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Датапаки',
      link: {
        type: 'generated-index',
        title: 'Датапаки',
        description: 'Датапаки работают на стороне сервера — вам не нужно ничего устанавливать. Все новые рецепты и механики доступны автоматически при подключении к серверу.',
      },
      items: [
        'datapacks/extended-crafts',
        'datapacks/trade-rebalance',
        'datapacks/geophilic',
      ],
    },
  ],
};

export default sidebars;
