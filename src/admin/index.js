// CMS
import CMS, { init } from 'netlify-cms'
import { ru } from 'netlify-cms-locales'

// Widgets
import { IdControl, IdPreview } from './widgets/uuid-widget'

// Collections
import pages from './collections/pages'
import portfolio from './collections/portfolio'
import technologies from './collections/technologies'
import settings from './collections/settings'

// Preview Template
import pagesPreview from './preview/pages'
import portfolioPreview from './preview/portfolio'
// CMS Locale
CMS.registerLocale('ru', ru)

// Register Widgets
CMS.registerWidget('id', IdControl, IdPreview)
const parentWidget = window.NetlifyCmsWidgetParent
CMS.registerWidget('parent', parentWidget.control, parentWidget.preview)

// Config Manual Init
init({
  config: {
    backend: {
      name: 'git-gateway',
      repo: 'skiglock/codespirit',
      branch: 'main'
    },
    local_backend: true,
    load_config_file: false,
    locale: 'ru',
    media_folder: 'static/uploads',
    public_folder: '/uploads',
    collections: [pages, portfolio, technologies, settings]
  }
})

// Register Preview Template
CMS.registerPreviewTemplate('pages', pagesPreview)
CMS.registerPreviewTemplate('portfolio', portfolioPreview)

// Register Preview Styles
CMS.registerPreviewStyle('/admin/style.css')
