const pkg = require('./package')

module.exports = {

  mode: 'spa',

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
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3B8070'},

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/global-components',
    '~plugins/instantsearch',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  // */
    build: {
        postcss: {
            plugins: {
                'postcss-cssnext': {
                    features: {
                        customProperties: false
                    }
                }
            }
        }
    },

  env: {
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID || "MZQPVRPXFY",
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY || "b2870abe304ad95866629a6713fd6e91",
    ALGOLIA_RESOURCES_INDEX: process.env.ALGOLIA_RESOURCES_INDEX || "mappcpd_demo_RESOURCES",
  },

  /*
  ** You can extend webpack config here
  */
  extend(config, ctx) {

  },
}

