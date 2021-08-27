/* eslint-disable indent */
/* eslint-disable no-undef */
import boxShadow from '../../../utils/boxShadow'
import form from '../common/form'
export default createClass({
  render() {
    const { color, title, button } = this.props
    return h(
      'div',
      {
        className: 'order-another',
        style: {
          backgroundColor: color,
          boxShadow: boxShadow(color)
        }
      },
      h(
        'div',
        { className: 'order-another__left' },
        h(form, { buttonTitle: button.getIn(['title']) })
      ),
      h(
        'div',
        { className: 'order-another__right' },
        h('h1', { className: 'order-another__title' }, title),
        h(
          'div',
          { className: 'order-another__phone' },
          h(
            'h2',
            { className: 'order-another__number' },
            h('a', null, '+79995554433')
          )
        )
      )
    )
  }
})
