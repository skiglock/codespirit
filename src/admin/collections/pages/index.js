import id from '../fields/id'
import date from '../fields/date'
import sections from '../sections'

const portfolio = {
  name: 'pages',
  label: 'Страницы',
  label_singular: 'страницу',
  folder: 'content/pages',
  path: '{{slug}}/index',
  create: true,
  nested: {
    depth: 100
  },
  fields: [
    id,
    date,
    {
      name: 'title',
      label: 'Заголовок страницы',
      widget: 'string',
      pattern: [
        '^(?!.*Портфолио|.*портфолио|.*Portfolio|.*portfolio).*$',
        'Портфолио уже есть :)'
      ]
    },
    sections
  ],
  meta: { path: { widget: 'parent', label: 'Папка', index_file: 'index' } }
}

export default portfolio
