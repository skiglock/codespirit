import id from '../fields/id'
import date from '../fields/date'
import published from '../fields/published'
import img from '../fields/img'
import title from '../fields/title'
import link from '../fields/link'

import description from '../fields/description'
import categories from './categories'

const portfolio = {
  name: 'portfolio',
  label: 'Портфолио',
  label_singular: 'кейс',
  folder: 'content/portfolio',
  path: '{{slug}}/index',
  create: true,
  fields: [
    id,
    date,
    published,
    title,
    img(),
    {
      name: 'logotype',
      label: 'Логотип',
      widget: 'image',
      default: ''
    },
    {
      name: 'gallery_desktop',
      label: 'Галерея компьютера',
      widget: 'list',
      summary: '{{fields.title}}',
      fields: [id, title, img()]
    },
    {
      name: 'gallery_mobile',
      label: 'Галерея мобильника',
      widget: 'list',
      summary: '{{fields.title}}',
      fields: [id, title, img()]
    },
    {
      name: 'technologies',
      label: 'Выбрать технологии',
      widget: 'list',
      summary: 'Технология',
      fields: [id, link('Выбрать технологию', 'technologies')]
    },
    {
      name: 'categories',
      label: 'Категории',
      widget: 'select',
      multiple: true,
      options: categories
    },
    {
      name: 'done',
      label: 'Что сделали',
      widget: 'list',
      summary: '{{fields.title}}',
      fields: [id, title]
    },
    description,
    {
      name: 'description_full',
      label: 'Полное описание',
      widget: 'markdown'
    },
    {
      name: 'project_link',
      label: 'Ссылка на проект',
      widget: 'string',
      default: ''
    }
  ],
  view_filters: [
    { label: categories[0], field: 'categories', pattern: categories[0] },
    { label: categories[1], field: 'categories', pattern: categories[1] },
    { label: categories[2], field: 'categories', pattern: categories[2] },
    { label: categories[3], field: 'categories', pattern: categories[3] },
    { label: categories[4], field: 'categories', pattern: categories[4] },
    { label: categories[5], field: 'categories', pattern: categories[5] }
  ],
  meta: { path: { widget: 'parent', label: 'Папка', index_file: 'index' } }
}

export default portfolio
