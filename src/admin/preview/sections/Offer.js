/* eslint-disable indent */
/* eslint-disable no-undef */
import boxShadow from '../../../utils/boxShadow'

export default createClass({
  render() {
    const { color, title, description, price, button } = this.props
    return h(
      'div',
      {
        className: 'offer',
        style: {
          backgroundColor: color,
          boxShadow: boxShadow(color)
        }
      },
      h(
        'div',
        { className: 'offer__left' },
        h('h1', { className: 'offer__title' }, title),
        h('div', {
          className: 'offer__description',
          dangerouslySetInnerHTML: {
            __html: description
          }
        })
      ),
      h(
        'div',
        { className: 'offer__right' },
        h('h2', { className: 'offer__price' }, `от ${price}`),
        h(
          'button',
          { className: 'button offer__button button--white button--large' },
          button.getIn(['title'])
        )
      )
    )
  }
})
