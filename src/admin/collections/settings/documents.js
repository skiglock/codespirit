import id from '../fields/id'
import title from '../fields/title'
import link from '../fields/link'

const documents = {
  name: 'documents',
  label: 'Документы',
  file: 'content/settings/documents.yaml',
  fields: [
    {
      name: 'docs',
      label: 'Документы',
      widget: 'list',
      fields: [id, title, link('Ссылка', 'pages')]
    }
  ]
}

export default documents
