import id from '../fields/id'
import title from '../fields/title'
import description from '../fields/description'

const spoiler = {
  name: 'spoiler',
  label: 'Спойлер',
  widget: 'list',
  fields: [id, title, description]
}

export default spoiler
