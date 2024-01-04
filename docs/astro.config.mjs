import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

const BASE_PATH = '/lora-meshtastic/'

// https://astro.build/config
export default defineConfig({
  base: BASE_PATH,
  site: 'https://htwdd-rn.github.io/lora-meshtastic/',
  redirects: {
    '/': 'intro/projektbeschreibung/',
  },
  trailingSlash: 'always',
  integrations: [
    starlight({
      locales: {
        root: {
          lang: 'de-DE',
          label: 'Deutsch',
        },
      },
      head: [
        {
          tag: 'base',
          attrs: {
            href: `${BASE_PATH}`,
          },
        },
      ],
      title: 'LoRa Meshtastic',
      editLink: {
        baseUrl: 'https://github.com/HTWDD-RN/lora-meshtastic/edit/main/docs/',
      },
      social: {
        github: 'https://github.com/HTWDD-RN/lora-meshtastic',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Einführung',
          autogenerate: { directory: 'intro' },
        },
        {
          label: 'FAQ',
          autogenerate: { directory: 'faq' },
        },
      ],
    }),
  ],
})
