// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],

  runtimeConfig: {
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
    OCR_API_KEY: process.env.OCR_API_KEY,
    MISTRAL_API_KEY: process.env.MISTRAL_API_KEY,
    public: {
      KKIAPAY_API_KEY: process.env.KKIAPAY_API_KEY
    }

  },
  build: {
    transpile: ['kkiapay']
  },
 vite: {
    define: {
      'process.env.NODE_ENV': '"development"',
    },
    resolve: {
      alias: {
        'pdfjs-dist/build/pdf.worker.mjs': 'pdfjs-dist/build/pdf.worker.mjs',
      }
    }
  },
  nitro: {
    routeRules: {
      '/.well-known/appspecific/**': { headers: { 'X-Robots-Tag': 'noindex' }, prerender: false }
    }
  }
})