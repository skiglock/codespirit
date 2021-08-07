import CMS from 'netlify-cms'

import pages from './pages'

window.CMS_MANUAL_INIT = true

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
    collections: [pages]
  }
})
