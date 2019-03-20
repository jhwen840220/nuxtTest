const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '測試Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:title', content: '測試Nuxt' },
      { property: 'og:description', content: '我是description' },
      { property: 'og:site_name', content: '測試site' },
      { property: 'og:locale', content: 'zh_TW' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU', crossorigin: 'anonymous' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'black',
    failedColor: 'red',
    height: '2px',
    duration: 5000,
    rtl: false
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/custom.scss',
    'ant-design-vue/dist/antd.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/register-store', '@/plugins/route-beforeEach'],
  
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  // bootstrapVue: {
  //   bootstrapCSS: false, // or `css`
  //   bootstrapVueCSS: false // or `bvCSS`
  // },

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
