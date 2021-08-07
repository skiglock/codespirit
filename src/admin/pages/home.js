import id from '../fields/id'
import title from '../fields/title'
import description from '../fields/description'
import sections from '../sections'

const home = {
  name: 'home',
  label: 'Главная',
  file: 'content/home.md',
  media_folder: '',
  public_folder: '',
  fields: [id, title, description, sections]
}

export default home
