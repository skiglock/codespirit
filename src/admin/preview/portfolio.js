/* eslint-disable indent */
/* eslint-disable no-undef */
import { markedToHtml } from '../../utils/sanitizeSections'
import mobile from './common/mobile'
import layout from './layout'
export default createClass({
  render() {
    const { entry, widgetsFor, getAsset } = this.props
    const title = entry.getIn(['data', 'title'])
    const logotype = getAsset(entry.getIn(['data', 'logotype']))
    const descriptionFull = markedToHtml(
      entry.getIn(['data', 'description_full'])
    )
    const categories = widgetsFor('categories')
    const galleryMobile = widgetsFor('gallery_mobile')
    const galleryDesktop = widgetsFor('gallery_desktop')
    const done = widgetsFor('done')
    const technologies = entry.getIn(['data', 'technologies'])
    return h(
      layout,
      { title },
      h(
        'div',
        { className: 'portfolio-case' },
        h(
          'div',
          { className: 'portfolio-case__left' },
          h(mobile, { images: galleryMobile, getAsset: getAsset }, null)
        ),
        h(
          'div',
          { className: 'portfolio-case__right' },
          h('img', {
            className: 'portfolio-case__logotype',
            src: logotype
          }),
          h(
            'ul',
            { className: 'portfolio-case__categories' },
            categories.map((category) =>
              h(
                'li',
                { className: 'portfolio-case__category' },
                '#' + category.getIn(['data'])
              )
            )
          ),
          h(
            'ul',
            { className: 'portfolio-case__technologies' },
            technologies.map((technology) =>
              h(
                'li',
                { className: 'portfolio-case__technologies-item' },
                h('img', {
                  className: 'portfolio-case__technologies-img',
                  style: { backgroundColor: 'lightgray' }
                }),
                h(
                  'h4',
                  { className: 'portfolio-case__technologies-title' },
                  h(
                    'a',
                    { className: 'portfolio-case__technologies-link' },
                    'Технология'
                  )
                )
              )
            )
          ),
          h(
            'ul',
            { className: 'portfolio-case__done' },
            done.map((dItem) =>
              h(
                'li',
                { className: 'portfolio-case__done-item' },
                dItem.getIn(['data', 'title'])
              )
            )
          ),
          h('div', {
            className: 'portfolio-case__done-description',
            dangerouslySetInnerHTML: {
              __html: descriptionFull
            }
          }),
          h(
            'div',
            { className: 'portfolio-case__images' },
            galleryDesktop.map((gItem) =>
              h('img', {
                className: 'portfolio-case__image',
                src: getAsset(gItem.getIn(['data', 'img'])),
                alt: getAsset(gItem.getIn(['data', 'title'])),
                style: { width: '100%' }
              })
            )
          ),
          h(
            'div',
            { className: 'portfolio-case__buttons' },
            h(
              'button',
              { className: 'button button--small button--primary' },
              'Перейти на сайт проекта'
            )
          )
        )
      )
    )
  }
})
