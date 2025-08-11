const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Berkelium',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#ff6f00' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],   
    ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true}],
    ['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'}],
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script',{async:true, src:'https://www.googletagmanager.com/gtag/js?id=G-61Q4F7F0RK'}],
    ['script', {}, `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-61Q4F7F0RK');
    `]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        items: [
          { text: 'Quick Start', link: '/docs/quick-start' }
        ]
      },
      {
        text: 'Blog',
        link: 'https://www.buddhilive.com'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/BerkeliumLabs/berkelium/'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            'quick-start',
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
