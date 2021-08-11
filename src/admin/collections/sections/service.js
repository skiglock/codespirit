import id from '../fields/id'
import title from '../fields/title'
import img from '../fields/img'
import colorFirst from '../fields/color_first'
import description from '../fields/description'
import colorSecond from '../fields/color_second'
import link from '../fields/link'

const service = {
  name: 'service',
  label: 'Услуга',
  widget: 'object',
  fields: [
    id,
    title,
    img(),
    description,
    colorFirst,
    colorSecond,
    link('Услуга', 'services'),
    { name: 'variant', label: 'Вариант', widget: 'boolean', default: false }
  ]
}

export default service
