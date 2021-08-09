module.exports = {
  siteName: 'Codespirit',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    }
  },
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
        configPath: false
      }
    }
  ]
}
