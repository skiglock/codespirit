import id from '../fields/id'
import title from '../fields/title'

import linkList from '../fields/link_list'

const ourPortfolio = {
  name: 'ourPortfolio',
  label: 'Портфолио',
  widget: 'object',
  fields: [id, title, linkList('portfolio')]
}

export default ourPortfolio
