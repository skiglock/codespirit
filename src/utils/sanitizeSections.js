import marked from 'marked'

const mdOptions = {
  pedantic: false,
  gfm: true,
  tables: true,
  smartLists: true,
  smartypants: true
}

export const markedToHtml = (markdown) => {
  marked.setOptions(mdOptions)
  return markdown ? marked(markdown) : 'Введите что нибудь'
}

const sanitizeSections = (sections) => {
  return sections.map((section) => {
    switch (section.type) {
      case 'bannerLogo':
        return {
          id: section.id,
          type: section.type,
          img: section.img,
          title: section.title,
          color: section.color,
          subtitle: section.subtitle,
          description: marked(section.description)
        }
      case 'descriptionImage':
        return {
          id: section.id,
          type: section.type,
          title: section.title,
          description: marked(section.description),
          img: section.img,
          position: section.position,
          reverse: section.reverse
        }
      case 'descriptionSpoilers':
        return {
          id: section.id,
          type: section.type,
          title: section.title,
          description: marked(section.description),
          spoilers: section.spoilers.map((spoiler) => {
            return {
              id: spoiler.id,
              title: spoiler.title,
              description: marked(spoiler.description)
            }
          })
        }
      case 'hashtagLogo':
        return {
          id: section.id,
          type: section.type,
          title: section.title,
          subtitle: section.subtitle,
          color: section.color
        }
      case 'needed':
        return {
          id: section.id,
          type: section.type,
          color: section.color,
          title: section.title,
          color_first: section.color_first,
          subtitle: section.subtitle,
          color_second: section.color_second,
          items: section.items
        }
      case 'offer':
        return {
          id: section.id,
          type: section.type,
          color: section.color,
          title: section.title,
          description: marked(section.description),
          price: section.price,
          button: section.button
        }
      case 'orderAnother':
        return {
          id: section.id,
          type: section.type,
          color: section.color,
          title: section.title,
          button: section.button
        }
      case 'order':
        return {
          id: section.id,
          type: section.type,
          color: section.color,
          title: section.title,
          description: marked(section.description),
          button: section.button
        }
      case 'other':
        return {
          id: section.id,
          type: section.type,
          title: section.title,
          color: section.color,
          link_list: section.link_list
        }
      case 'ourPortfolio':
        return {
          id: section.id,
          type: section.type,
          title: section.title,
          link_list: section.link_list
        }
      case 'service':
        return {
          id: section.id,
          type: section.type,
          number: section.number,
          title: section.title,
          img: section.img,
          description: marked(section.description),
          color_first: section.color_first,
          color_second: section.color_second,
          link: section.link,
          variant: section.variant
        }
      case 'stages':
        return {
          id: section.id,
          type: section.type,
          title: section.title,
          img: section.img,
          color: section.color,
          spoilers: section.spoilers.map((spoiler) => {
            return {
              id: spoiler.id,
              title: spoiler.title,
              description: marked(spoiler.description)
            }
          })
        }
      case 'word':
        return {
          id: section.id,
          type: section.type,
          description: marked(section.description)
        }
      default:
        return false
    }
  })
}

export default sanitizeSections
