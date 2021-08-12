import id from '../fields/id'
import title from '../fields/title'
import color from '../fields/color'
import linkList from '../fields/link_list'

const other = {
  name: 'other',
  label: 'Доп. предложения',
  widget: 'object',
  fields: [id, title, color, linkList('pages')]
}

export default other
