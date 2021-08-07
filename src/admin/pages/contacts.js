import id from '../fields/id'
import title from '../fields/title'
import description from '../fields/description'
import sections from '../sections'

const contacts = {
  name: 'contacts',
  label: 'Контакты',
  file: 'content/contacts.md',
  media_folder: '',
  public_folder: '',
  fields: [id, title, description, sections]
}

export default contacts
