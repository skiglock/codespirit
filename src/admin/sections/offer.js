import id from '../fields/id'
import color from '../fields/color'
import title from '../fields/title'
import description from '../fields/description'
import price from '../fields/price'
import button from '../fields/button'

const offer = {
  name: 'offer',
  label: 'Оффер',
  widget: 'object',
  fields: [id, color, title, description, price, button]
}

export default offer
