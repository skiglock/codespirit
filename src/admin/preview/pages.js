/* eslint-disable indent */
/* eslint-disable no-undef */
import boxShadow from '../../utils/boxShadow'
import { markedToHtml } from '../../utils/sanitizeSections'

import layout from './layout'

// Sections
import BannerLogo from './sections/BannerLogo'
import DescriptionImage from './sections/DescriptionImage'
import DescriptionSpoilers from './sections/DescriptionSpoilers'
import HashtagLogo from './sections/HashtagLogo'
import Needed from './sections/Needed'
import Offer from './sections/Offer'
import Order from './sections/Order'
import OrderAnother from './sections/OrderAnother'
import Stages from './sections/Stages'
import Word from './sections/Word'
import Service from './sections/Service'
import Other from './sections/Other'
import OurPortfolio from './sections/OurPortfolio'

export default createClass({
  render() {
    const { entry, widgetsFor, getAsset } = this.props

    return h(
      layout,
      { title: entry.getIn(['data', 'title']) },
      entry.getIn(['data', 'sections'])
        ? widgetsFor('sections').map((section) => {
            // ---------------------------------------------
            const title = section.getIn(['data', 'title'])
            const subTitle = section.getIn(['data', 'subtitle'])
            const img = getAsset(section.getIn(['data', 'img']))
            const description = markedToHtml(
              section.getIn(['data', 'description'])
            )
            const color = section.getIn(['data', 'color'])
            const colorFirst = section.getIn(['data', 'color_first'])
            const colorSecond = section.getIn(['data', 'color_second'])

            const position = section.getIn(['data', 'position'])
              ? section.getIn(['data', 'position'])
              : ''
            const reverse = section.getIn(['data', 'reverse'])
              ? section.getIn(['data', 'reverse'])
              : ''
            const spoilers = section.getIn(['data', 'spoilers'])
            const items = section.getIn(['data', 'items'])
            const price = section.getIn(['data', 'price'])
            const button = section.getIn(['data', 'button'])
            const variant = section.getIn(['data', 'variant'])
            const number = section.getIn(['data', 'number'])
            const linkList = section.getIn(['data', 'link_list'])

            // ---------------------------------------------
            if (section.getIn(['data', 'type']) === 'hashtagLogo') {
              return h(
                HashtagLogo,
                {
                  title,
                  subTitle,
                  color
                },
                null
              )
              // ---------------------------------------------
            } else if (section.getIn(['data', 'type']) === 'descriptionImage') {
              return h(
                DescriptionImage,
                { img, description, position, reverse },
                null
              )
              // ---------------------------------------------
            } else if (
              section.getIn(['data', 'type']) === 'descriptionSpoilers'
            ) {
              return h(DescriptionSpoilers, {
                title,
                description,
                spoilers
              })
              // ---------------------------------------------
            } else if (section.getIn(['data', 'type']) === 'bannerLogo') {
              return h(
                BannerLogo,
                {
                  title,
                  subTitle,
                  img,
                  description,
                  color,
                  boxShadow
                },
                null
              )
              // ---------------------------------------------
            } else if (section.getIn(['data', 'type']) === 'needed') {
              return h(
                Needed,
                {
                  title,
                  subTitle,
                  items,
                  color,
                  colorFirst,
                  colorSecond,
                  getAsset
                },
                null
              )
              // ---------------------------------------------
            } else if (section.getIn(['data', 'type']) === 'offer') {
              return h(
                Offer,
                {
                  color,
                  title,
                  description,
                  price,
                  button
                },
                null
              )
              // ---------------------------------------------
            } else if (section.getIn(['data', 'type']) === 'orderAnother') {
              return h(
                OrderAnother,
                {
                  color,
                  title,
                  button
                },
                null
              )
              // ---------------------------------------------
            } else if (section.getIn(['data', 'type']) === 'order') {
              return h(
                Order,
                {
                  title,
                  description,
                  color,
                  button
                },
                null
              )
              // ---------------------------------------------
            } else if (section.getIn(['data', 'type']) === 'other') {
              return h(
                Other,
                {
                  title,
                  color,
                  linkList
                },
                null
              )
              // ---------------------------------------------
            } else if (section.getIn(['data', 'type']) === 'ourPortfolio') {
              return h(
                OurPortfolio,
                {
                  title,
                  linkList
                },
                null
              )
              // ---------------------------------------------
            } else if (section.getIn(['data', 'type']) === 'service') {
              return h(
                Service,
                {
                  number,
                  title,
                  description,
                  colorFirst,
                  colorSecond,
                  img,
                  variant
                },
                null
              )
              // ---------------------------------------------
            } else if (section.getIn(['data', 'type']) === 'stages') {
              return h(
                Stages,
                {
                  title,
                  color,
                  spoilers,
                  img
                },
                null
              )
              // ---------------------------------------------
            } else if (section.getIn(['data', 'type']) === 'word') {
              return h(
                Word,
                {
                  description
                },
                null
              )
              // ---------------------------------------------
            }
            return false
          })
        : h('div', {}, 'Добавь секцию')
    )
  }
})
