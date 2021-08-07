import id from '../fields/id'
import img from '../fields/img'
import title from '../fields/title'
import subtitle from '../fields/subtitle'
import description from '../fields/description'

const banner = {
  name: 'banner',
  label: 'Баннер',
  widget: 'object',
  fields: [id, img, title, subtitle, description]
}

export default banner
