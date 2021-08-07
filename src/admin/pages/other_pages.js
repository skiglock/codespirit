/* eslint-disable camelcase */
import id from '../fields/id'
import date from '../fields/date'
import title from '../fields/title'
import description from '../fields/description'

import sections from '../sections'

const other_pages = {
  name: 'other_pages',
  label: 'Другие страницы',
  label_singular: 'cтраницу',
  folder: 'content/pages',
  path: '{{slug}}/index',
  create: true,
  fields: [id, date, title, description, sections]
}

export default other_pages
