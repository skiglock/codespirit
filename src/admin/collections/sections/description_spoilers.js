import id from '../fields/id'
import title from '../fields/title'
import description from '../fields/description'
import spoiler from '../fields/spoiler'

const descriptionSpoilers = {
  name: 'description-spoilers',
  label: 'Описание со спойлерами',
  widget: 'object',
  fields: [id, title, description, spoiler]
}

export default descriptionSpoilers
