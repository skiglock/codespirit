import id from '../fields/id'
import img from '../fields/img'
import title from '../fields/title'
import color from '../fields/color'
import subtitle from '../fields/subtitle'
import description from '../fields/description'

const bannerLogo = {
  name: 'bannerLogo',
  label: 'Баннер',
  widget: 'object',
  fields: [id, img(), title, color, subtitle, description]
}

export default bannerLogo
