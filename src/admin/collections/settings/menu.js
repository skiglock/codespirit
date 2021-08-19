import id from '../fields/id'
import link from '../fields/link'

const documents = {
  name: 'Меню',
  label: 'Меню',
  file: 'src/data/menu_settings.yaml',
  fields: [
    {
      name: 'menu',
      summary: 'Меню',
      label: 'Меню',
      widget: 'list',
      fields: [id, link('Ссылка', 'pages')]
    }
  ]
}

export default documents
