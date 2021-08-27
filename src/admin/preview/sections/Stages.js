/* eslint-disable indent */
/* eslint-disable no-undef */
import { markedToHtml } from '../../../utils/sanitizeSections'

import boxShadow from '../../../utils/boxShadow'
export default createClass({
  render() {
    const { color, title, img, spoilers } = this.props
    return h(
      'div',
      { className: 'stages' },
      h('h2', { className: 'stages__title' }, title),
      h(
        'div',
        {
          className: 'stages__body',
          style: {
            backgroundColor: color,
            boxShadow: boxShadow(color)
          }
        },
        h(
          'div',
          { className: 'stages__left' },
          h('div', { className: 'stages__img' }, h('img', { src: img }))
        ),
        h(
          'div',
          { className: 'stages__right' },
          spoilers.map((spoiler, idx) =>
            h(
              'div',
              { className: 'stages__item' },
              h('span', { className: 'stages__number' }, idx + 1),
              h(
                'div',
                { className: 'stages__spoiler' },
                h(
                  'h4',
                  { className: 'stages__spoiler-title' },
                  spoiler.getIn(['title'])
                ),
                h('div', {
                  className: 'stages__spoiler-description',
                  dangerouslySetInnerHTML: {
                    __html: markedToHtml(spoiler.getIn(['description']))
                  }
                })
              )
            )
          )
        )
      )
    )
  }
})
