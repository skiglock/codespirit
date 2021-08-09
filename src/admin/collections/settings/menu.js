import id from '../fields/id'
import title from '../fields/title'
import link from '../fields/link'

const documents = {
  name: 'Меню',
  label: 'Меню',
  file: 'content/settings/menu.yaml',
  fields: [
    {
      name: 'menu',
      label: 'Меню',
      widget: 'list',
      fields: [id, title, link('Ссылка', 'pages')]
    }
  ]
}

export default documents
