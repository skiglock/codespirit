import id from '../fields/id'
import title from '../fields/title'
import img from '../fields/img'
import spoilers from '../fields/spoilers'
import color from '../fields/color'

const stages = {
  name: 'stages',
  label: 'Этапы',
  widget: 'object',
  fields: [id, title, img(), color, spoilers]
}

export default stages
