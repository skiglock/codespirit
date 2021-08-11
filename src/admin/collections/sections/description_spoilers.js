import id from '../fields/id'
import title from '../fields/title'
import description from '../fields/description'
import spoilers from '../fields/spoilers'

const descriptionSpoilers = {
  name: 'descriptionSpoilers',
  label: 'Описание со спойлерами',
  widget: 'object',
  fields: [id, title, description, spoilers]
}

export default descriptionSpoilers
