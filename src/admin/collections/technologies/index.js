import id from '../fields/id'
import img from '../fields/img'
import title from '../fields/title'

const technologies = {
  name: 'technologies',
  label: 'Технологии',
  label_singular: 'технологию',
  folder: 'content/technologies',
  path: '{{slug}}/index',
  create: true,
  fields: [
    id,
    img(),
    title,
    {
      name: 'link',
      label: 'Ссылка',
      widget: 'string',
      default: ''
    }
  ]
}

export default technologies
