import id from '../fields/id'
import title from '../fields/title'
import description from '../fields/description'
import sections from '../sections'

const about = {
  name: 'about',
  label: 'О студии',
  file: 'content/pages/about.md',
  media_folder: '',
  public_folder: '',
  fields: [id, title, description, sections]
}

export default about
