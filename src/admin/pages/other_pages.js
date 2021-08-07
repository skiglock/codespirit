/* eslint-disable camelcase */
import id from '../fields/id'
import date from '../fields/date'
import published from '../fields/published'
import title from '../fields/title'
import description from '../fields/description'
import sections from '../sections'

const other_pages = {
  name: 'other_pages',
  label: 'Дополнительные страницы',
  label_singular: 'cтраницу',
  folder: 'content/pages',
  path: '{{slug}}/index',
  create: true,
  nested: {
    depth: 100
  },
  fields: [id, date, published, title, description, sections]
}

export default other_pages
