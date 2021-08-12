import id from '../fields/id'
import link from '../fields/link'

const linkList = (path) => ({
  name: 'link_list',
  label: 'Выбрать ссылки',
  widget: 'list',
  fields: [id, link('Ссылка', path)]
})

export default linkList
