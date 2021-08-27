/* eslint-disable indent */
/* eslint-disable no-undef */
export default createClass({
  render() {
    const { images, getAsset } = this.props

    return h(
      'div',
      { className: 'mobile' },
      h(
        'div',
        { className: 'mobile__display' },
        h(
          'div',
          { className: 'mobile__slides' },
          images.map((image) =>
            h('img', {
              className: 'mobile__slide',
              src: getAsset(image.getIn(['data', 'img'])),
              alt: getAsset(image.getIn(['data', 'title']))
            })
          )
        )
      )
    )
  }
})
