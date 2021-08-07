import id from '../fields/id'
import date from '../fields/date'
import published from '../fields/published'
import img from '../fields/img'
import title from '../fields/title'
import sections from '../sections'

const portfolio = {
  name: 'portfolio',
  label: 'Портфолио',
  label_singular: 'кейс',
  folder: 'content/portfolio',
  path: '{{slug}}/index',
  create: true,
  fields: [id, date, published, img(), title, sections]
}

export default portfolio
