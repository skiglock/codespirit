import id from '../fields/id'
import color from '../fields/color'
import title from '../fields/title'
import colorFirst from '../fields/color_first'
import subtitle from '../fields/subtitle'
import colorSecond from '../fields/color_second'
import img from '../fields/img'

const needed = {
  name: 'needed',
  label: 'Что требуется',
  widget: 'object',
  fields: [
    id,
    color,
    title,
    colorFirst,
    subtitle,
    colorSecond,
    {
      name: 'items',
      label: 'Элементы',
      widget: 'list',
      fields: [id, img(), title]
    }
  ]
}

export default needed
