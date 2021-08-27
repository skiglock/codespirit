/* eslint-disable indent */
/* eslint-disable no-undef */
export default createClass({
  render() {
    const { img, description, position, reverse } = this.props
    const checkReverse = () => {
      if (reverse) {
        return ' description-image--reverse'
      } else {
        return ''
      }
    }
    return h(
      'div',
      {
        className:
          'description-image' +
          ` description-image--${position}` +
          checkReverse()
      },
      h('img', { src: img }),
      h('div', {
        className: 'description-image__description',
        dangerouslySetInnerHTML: {
          __html: description
        }
      })
    )
  }
})
