/* eslint-disable indent */
/* eslint-disable no-undef */

export default createClass({
  render() {
    const { description } = this.props
    return h('div', {
      className: 'word',
      dangerouslySetInnerHTML: {
        __html: description
      }
    })
  }
})
