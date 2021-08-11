import id from '../fields/id'
import title from '../fields/title'
import subtitle from '../fields/subtitle'
import color from '../fields/color'

const hashtagLogo = {
  name: 'hashtag-logo',
  label: 'Заголовок с хештегом',
  widget: 'object',
  fields: [id, title, subtitle, color]
}

export default hashtagLogo
