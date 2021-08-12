import id from '../fields/id'
import linkList from '../fields/link_list'

const ourPortfolio = {
  name: 'ourPortfolio',
  label: 'Портфолио',
  widget: 'object',
  fields: [id, linkList('portfolio')]
}

export default ourPortfolio
