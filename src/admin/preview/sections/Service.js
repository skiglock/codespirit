/* eslint-disable indent */
/* eslint-disable no-undef */
import boxShadow from '../../../utils/boxShadow'

export default createClass({
  render() {
    const {
      number,
      title,
      description,
      img,
      colorFirst,
      colorSecond,
      variant
    } = this.props
    const checkVariant = () => {
      return variant ? ' service--custom' : ''
    }
    return h(
      'div',
      { className: 'service' + checkVariant() },
      h(
        'div',
        {
          className: 'service__name',
          style: {
            backgroundColor: colorFirst,
            boxShadow: boxShadow(colorFirst)
          }
        },
        variant ? '' : h('span', { className: 'service__number' }, number),
        h('span', { className: 'service__title' }, title)
      ),
      h(
        'div',
        {
          className: 'service__description',
          style: {
            backgroundColor: colorSecond,
            boxShadow: boxShadow(colorSecond)
          }
        },
        variant
          ? ''
          : h(
              'div',
              { className: 'service__description-img' },
              h('img', { src: img })
            ),
        h('h3', { className: 'service__description-title' }, title),
        h('div', {
          className: 'service__description-text',
          dangerouslySetInnerHTML: {
            __html: description
          }
        }),
        h(
          'button',
          {
            className:
              'button button--primary button--small service__description-button'
          },
          'Посмотреть'
        )
      )
    )
  }
})
