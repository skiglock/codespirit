/* eslint-disable indent */
/* eslint-disable no-undef */
import boxShadow from '../../../utils/boxShadow'

export default createClass({
  render() {
    const { title, subTitle, color } = this.props
    return h(
      'div',
      { className: 'hashtag-logo' },
      h('h1', { className: 'hashtag-logo__title' }, title),
      h(
        'div',
        {
          className: 'hashtag-logo__description',
          style: { backgroundColor: color, boxShadow: boxShadow(color) }
        },
        h('p', null, subTitle)
      )
    )
  }
})
