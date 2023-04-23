import { resolve } from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, './'),
    '@utils': resolve(__dirname, './utils'),
    '@components': resolve(__dirname, './components'),
    '@pages': resolve(__dirname, './pages')
  },
  runtimeConfig: {
    public: {
      url: 'https://login.microsoftonline.com/common/oauth2/v2.0'
    }
  },
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'zh-cmn-Hans'
      },
      title: 'E5 ╰(*°▽°*)╯',
      meta: [
        {
          name: 'keywords',
          content: 'E5, refresh token'
        },
        {
          name: 'description',
          content: '一个获取 E5 refresh token 的程序'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        }
      ]
    }
  }
});
