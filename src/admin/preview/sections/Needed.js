/* eslint-disable indent */
/* eslint-disable no-undef */
import boxShadow from '../../../utils/boxShadow'

export default createClass({
  render() {
    const { title, subTitle, color, colorFirst, colorSecond, items, getAsset } =
      this.props
    return h(
      'div',
      {
        className: 'needed',
        style: { backgroundColor: color, boxShadow: boxShadow(color) }
      },
      h(
        'div',
        {
          className: 'needed__header',
          style: {
            backgroundColor: colorFirst,
            boxShadow: boxShadow(colorFirst)
          }
        },
        h('h1', { className: 'needed__title' }, title)
      ),
      h(
        'div',
        { className: 'needed__items' },
        items.map((item) =>
          h(
            'figure',
            { className: 'needed__item' },
            h(
              'div',
              { className: 'needed__img' },
              h('img', { src: getAsset(item.getIn(['img'])) })
            ),
            h('figcaption', null, item.getIn(['title']))
          )
        )
      ),
      h(
        'div',
        {
          className: 'needed__bottom',
          style: {
            backgroundColor: colorSecond,
            boxShadow: boxShadow(colorSecond)
          }
        },
        h('h2', { className: 'needed__subtitle' }, subTitle)
      )
    )
  }
})
