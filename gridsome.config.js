const path = require('path')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/_variables.scss'),
        path.resolve(__dirname, './src/assets/scss/_mixins.scss'),
        path.resolve(__dirname, './src/assets/scss/fonts.scss'),
        path.resolve(__dirname, './src/assets/scss/style.scss')
      ]
    })
}

module.exports = {
  siteName: 'Codespirit',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Pages',
        baseDir: 'content/pages',
        template: 'src/templates/FlexiblePage.vue'
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'PortfolioCase',
        baseDir: 'content/portfolio',
        pathPrefix: '/portfolio',
        template: 'src/templates/PortfolioCase.vue',
        refs: {
          categories: {
            typeName: 'PortfolioCategory',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin',
        htmlPath: 'src/admin/index.html',
        modulePath: 'src/admin/index.js',
        configPath: false,
        enableIdentityWidget: true
      }
    }
  ],
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
