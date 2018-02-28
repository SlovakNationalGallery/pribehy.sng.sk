const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Router 
  */
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/pribehy.sng.sk/' : '/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: 'site.webmanifest' },
      { rel: 'apple-touch-icon', href: 'icon.png' },
      { rel: 'icon', type: 'image/png', href: 'favicon-16x16.png', sizes: "16x16"},
      { rel: 'icon', type: 'image/png', href: 'favicon-32x32.png', sizes: "32x32"},
      { rel: 'icon', type: 'image/png', href: 'favicon-96x96.png', sizes: "96x96"},
      { rel: 'icon', type: 'image/png', href: 'favicon-194x194.png', sizes: "194x194"},
    ],
    script: [      
      { src: 'js/modernizr.custom.js' },
      { src: 'js/toucheffects.js' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
