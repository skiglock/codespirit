/* eslint-disable camelcase */
// CMS
import CMS from 'netlify-cms'
import { ru } from 'netlify-cms-locales'

// Widgets
import { IdControl, IdPreview } from './widgets/uuid-widget'

// Collections
import pages from './pages'
import other_pages from './pages/other_pages'
import portfolio from './portfolio'

window.CMS_MANUAL_INIT = true

CMS.registerLocale('ru', ru)

CMS.registerWidget('id', IdControl, IdPreview)

// Manual Init
CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
      repo: 'skiglock/codespirit',
      brach: 'main'
    },
    local_backend: true,
    locale: 'ru',
    load_config_file: false,
    media_folder: 'static/uploads',
    public_folder: '/uploads',
    collections: [pages, other_pages, portfolio]
  }
})
