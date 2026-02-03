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
            slug: 'custom',
          },
          items: [
            {
              type: 'category',
              label: 'Доверие (Trust)',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Trust',
                description: 'Защита от гриферства новичков и уровни доверия',
              },
              items: [
                'plugins/custom/trust/newbie-protection',
              ],
            },
            {
              type: 'category',
              label: 'Qolity',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Qolity',
                description: 'Улучшения качества жизни для комфортной игры',
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
              label: 'Art',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Art',
                description: 'Плагин для создания портретов на черепах',
              },
              items: [
                'plugins/custom/art/portraits',
              ],
            },
            {
              type: 'category',
              label: 'Nexus',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Nexus',
                description: 'Системные функции сервера',
              },
              items: [
                'plugins/custom/nexus/afk',
                'plugins/custom/nexus/links',
              ],
            },
            {
              type: 'category',
              label: 'Bridges',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Bridges',
                description: 'Интеграция чата Minecraft с Discord и Telegram',
              },
              items: [
                'plugins/custom/bridges/chat-integration',
                'plugins/custom/bridges/commands',
              ],
            },
            {
              type: 'category',
              label: 'Hammer',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Hammer',
                description: 'Ограничения для игроков',
              },
              items: [
                'plugins/custom/hammer/hammer',
              ],
            },
            {
              type: 'category',
              label: 'Babble',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Babble',
                description: 'Система чата с каналами и форматированием',
              },
              items: [
                'plugins/custom/babble/babble',
              ],
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
            slug: 'third-party',
          },
          items: [
            'plugins/third-party/voice-chat',
            'plugins/third-party/axiom',
            'plugins/third-party/plots',
            'plugins/third-party/bluemap',
            'plugins/third-party/tab',
            'plugins/third-party/gsit',
            'plugins/third-party/skin-restorer',
            'plugins/third-party/coordinate-offset',
            'plugins/third-party/coreprotect',
            'plugins/third-party/vivecraft',
            'plugins/third-party/emotecraft',
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
        slug: 'datapacks',
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
