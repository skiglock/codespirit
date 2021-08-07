/* eslint-disable camelcase */
import service from './service'
import banner from './banner'
import stages from './stages'
import needed from './needed'
import offer from './offer'
import portfolio from './portfolio'
import other from './other'
import order from './order'
import order_another from './order_another'
import text from './text'

const sections = {
  name: 'sections',
  label: 'Секции',
  widget: 'list',
  types: [
    service,
    banner,
    stages,
    needed,
    offer,
    portfolio,
    other,
    order,
    order_another,
    text
  ]
}

export default sections
