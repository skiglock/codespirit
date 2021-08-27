/* eslint-disable indent */
/* eslint-disable no-undef */
import boxShadow from '../../../utils/boxShadow'
import form from '../common/form'
export default createClass({
  render() {
    const { color, title, description, button } = this.props
    return h(
      'div',
      {
        className: 'order',
        style: {
          backgroundColor: color,
          boxShadow: boxShadow(color)
        }
      },
      h(
        'div',
        { className: 'order__left' },
        h('h1', { className: 'order__title' }, title),
        h('div', {
          className: 'order__description',
          dangerouslySetInnerHTML: {
            __html: description
          }
        }),
        h('a', { className: 'order__phone' }, '+79955443322')
      ),
      h(
        'div',
        { className: 'order__right' },
        h(form, { buttonTitle: button.getIn(['title']) })
      )
    )
  }
})
