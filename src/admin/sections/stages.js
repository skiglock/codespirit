import id from '../fields/id'
import title from '../fields/title'
import img from '../fields/img'
import spoiler from '../fields/spoiler'
import color from '../fields/color'

const stages = {
  name: 'stages',
  label: 'Этапы',
  widget: 'object',
  fields: [id, title, img(), color, spoiler]
}

export default stages
