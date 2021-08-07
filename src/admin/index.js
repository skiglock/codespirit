/* eslint-disable import/first */
/* eslint-disable camelcase */
window.CMS_MANUAL_INIT = true

// CMS
import CMS from 'netlify-cms'
import { ru } from 'netlify-cms-locales'

// Widgets
import { IdControl, IdPreview } from './widgets/uuid-widget'

// Collections
import pages from './pages'
import other_pages from './pages/other_pages'
import portfolio from './portfolio'
import settings from './settings'

// Manual Init
CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
      repo: 'skiglock/codespirit',
      branch: 'main'
    },
    load_config_file: false,
    local_backend: true,
    locale: 'ru',
    media_folder: 'static/uploads',
    public_folder: '/uploads',
    collections: [pages, other_pages, portfolio, settings]
  }
})

CMS.registerLocale('ru', ru)

CMS.registerWidget('id', IdControl, IdPreview)
