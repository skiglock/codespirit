import id from './id'
import title from './title'
import description from './description'

const spoilers = {
  name: 'spoilers',
  label: 'Спойлеры',
  widget: 'list',
  summary: '{{title}}',
  fields: [id, title, description]
}

export default spoilers
