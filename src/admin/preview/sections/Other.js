/* eslint-disable indent */
/* eslint-disable no-undef */
import boxShadow from '../../../utils/boxShadow'

export default createClass({
  render() {
    const { color, title, linkList } = this.props
    return h(
      'div',
      {
        className: 'other',
        style: {
          backgroundColor: color,
          boxShadow: boxShadow(color)
        }
      },
      h('h1', { className: 'other__title' }, title),
      h(
        'h1',
        { className: 'other__links' },

        linkList.map((link) =>
          h(
            'button',
            { className: 'button button--white button--small' },
            'Какая-то ссылка'
          )
        )
      )
    )
  }
})
