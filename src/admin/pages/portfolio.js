import id from '../fields/id'
import title from '../fields/title'
import description from '../fields/description'

const portfolio = {
  name: 'portfolio',
  label: 'Портфолио',
  file: 'content/pages/portfolio.md',
  media_folder: '',
  public_folder: '',
  fields: [id, title, description]
}

export default portfolio
