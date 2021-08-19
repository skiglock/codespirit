import id from '../fields/id'
import link from '../fields/link'

const documents = {
  name: 'documents',
  label: 'Документы',
  file: 'src/data/documents_settings.yaml',
  fields: [
    {
      name: 'docs',
      label: 'Документы',
      widget: 'list',
      summary: 'Документ',
      fields: [id, link('Ссылка', 'pages')]
    }
  ]
}

export default documents
