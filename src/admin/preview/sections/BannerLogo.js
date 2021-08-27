/* eslint-disable indent */
/* eslint-disable no-undef */
export default createClass({
  render() {
    const { title, img, subTitle, description, color, boxShadow } = this.props
    return h(
      'div',
      { className: 'banner-logo' },
      h('div', { className: 'banner-logo__img' }, h('img', { src: img })),
      h(
        'div',
        { className: 'banner-logo__header' },
        h('h1', { className: 'banner-logo__title' }, title)
      ),
      h(
        'div',
        { className: 'banner-logo__bottom' },
        h('h2', { className: 'banner-logo__subtitle' }, subTitle),
        h('div', {
          className: 'banner-logo__description',
          style: { backgroundColor: color, boxShadow: boxShadow(color) },
          dangerouslySetInnerHTML: {
            __html: description
          }
        })
      )
    )
  }
})
