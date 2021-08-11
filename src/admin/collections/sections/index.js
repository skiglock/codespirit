import service from './service'
import bannerLogo from './banner_logo'
import stages from './stages'
import needed from './needed'
import offer from './offer'
import ourPortfolio from './our_portfolio'
import other from './other'
import order from './order'
import orderAnother from './order_another'
import word from './word'
import hashtagLogo from './hashtag_logo'
import descriptionImage from './description_image'
import descriptionSpoilers from './description_spoilers'

const sections = {
  name: 'sections',
  label: 'Секции',
  widget: 'list',
  required: false,
  types: [
    hashtagLogo,
    descriptionImage,
    descriptionSpoilers,
    service,
    bannerLogo,
    stages,
    needed,
    offer,
    ourPortfolio,
    other,
    order,
    orderAnother,
    word
  ]
}

export default sections
