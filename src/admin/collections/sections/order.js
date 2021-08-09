import id from '../fields/id'
import color from '../fields/color'
import title from '../fields/title'
import description from '../fields/description'
import button from '../fields/button'

const order = {
  name: 'order',
  label: 'Форма заказа',
  widget: 'object',
  fields: [id, color, title, description, button]
}

export default order
