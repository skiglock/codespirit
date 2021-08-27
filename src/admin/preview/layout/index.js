/* eslint-disable indent */
/* eslint-disable no-undef */
const layoutClass = 'content'
export default createClass({
  render() {
    const { children } = this.props
    return h(
      'section',
      { className: `${layoutClass}` },
      h(
        'div',
        {
          className: `${layoutClass}__wrapper`
        },
        h(
          'header',
          { className: `${layoutClass}__header` },
          h('h1', { className: `${layoutClass}__title` })
        ),
        h('div', { className: `${layoutClass}__body` }, children)
      )
    )
  }
})
