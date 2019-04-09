const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://at.alicdn.com/t/font_1005748_dznoaug96n.css'},
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        // href: 'https://highlightjs.org/static/demo/styles/an-old-hope.css'
        href: 'https://highlightjs.org/static/demo/styles/monokai-sublime.css'
        // href: 'https://highlightjs.org/static/demo/styles/monokai.css'
        // href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css'
      },
      {rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css'},
    ],
    script: [
      // {src: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js'},
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#35CC62'
  }
  ,

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins:
    [
      {src: '~plugins/message', ssr: false},
      '~/plugins/axios',
      '~/plugins/validate',
    ],

  /*
  ** Nuxt.js modules
  */
  modules:
    [
      // Doc: https://github.com/nuxt-community/axios-module#usage
      '@nuxtjs/axios',
    ],
  /*
  ** Axios module configuration
  */
  axios:
    {
      // See https://github.com/nuxt-community/axios-module#options
      proxy: true,
      prefix:
        '/', // it only work when proxy is enabled
    }
  ,

  proxy: {
    '/blog': process.env.NODE_ENV === 'production' ? 'https://api.bstu.cn' : 'http://localhost:3004',
  }
  ,

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
}
