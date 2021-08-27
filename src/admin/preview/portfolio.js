/* eslint-disable indent */
/* eslint-disable no-undef */
import { markedToHtml } from '../../utils/sanitizeSections'
import mobile from './common/mobile'
import layout from './layout'
export default createClass({
  render() {
    const { entry, widgetsFor, getAsset } = this.props
    const data = {
      logotype: getAsset(entry.getIn(['data', 'logotype'])),
      description_full: markedToHtml(entry.getIn(['data', 'description_full'])),
      categories: widgetsFor('categories'),
      gallery_mobile: widgetsFor('gallery_mobile'),
      gallery_desktop: widgetsFor('gallery_desktop'),
      done: widgetsFor('done'),
      technologies: widgetsFor('technologies')
    }
    return h(
      layout,
      null,
      h(
        'div',
        { className: 'portfolio-case' },
        h(
          'div',
          { className: 'portfolio-case__left' },
          h(mobile, { images: data.gallery_mobile, getAsset: getAsset }, null)
        ),
        h(
          'div',
          { className: 'portfolio-case__right' },
          h('img', {
            className: 'portfolio-case__logotype',
            src: data.logotype
          }),
          h(
            'ul',
            { className: 'portfolio-case__categories' },
            data.categories.map((category) =>
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
            data.technologies.map((technology) =>
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
                    'Авто'
                  )
                )
              )
            )
          ),
          h(
            'ul',
            { className: 'portfolio-case__done' },
            data.done.map((dItem) =>
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
              __html: data.description_full
            }
          }),
          h(
            'div',
            { className: 'portfolio-case__images' },
            data.gallery_desktop.map((gItem) =>
              h('img', {
                className: 'portfolio-case__image',
                src: getAsset(gItem.getIn(['data', 'img'])),
                alt: getAsset(gItem.getIn(['data', 'title']))
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
