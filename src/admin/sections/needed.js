/* eslint-disable camelcase */
import id from '../fields/id'
import color from '../fields/color'
import title from '../fields/title'
import color_first from '../fields/color_first'
import subtitle from '../fields/subtitle'
import color_second from '../fields/color_second'
import img from '../fields/img'

const needed = {
  name: 'needed',
  label: 'Что требуется',
  widget: 'object',
  fields: [
    id,
    color,
    title,
    color_first,
    subtitle,
    color_second,
    {
      name: 'items',
      label: 'Элементы',
      widget: 'list',
      fields: [id, img, title]
    }
  ]
}

export default needed
