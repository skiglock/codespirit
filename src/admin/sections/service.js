/* eslint-disable camelcase */
import id from '../fields/id'
import title from '../fields/title'
import img from '../fields/img'
import color_first from '../fields/color_first'
import description from '../fields/description'
import color_second from '../fields/color_second'
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
    color_first,
    color_second,
    link,
    { name: 'variant', label: 'Вариант', widget: 'boolean', default: false }
  ]
}

export default service
