/* eslint-disable indent */
/* eslint-disable no-undef */
export default createClass({
  render() {
    const { title, description, spoilers } = this.props
    return h(
      'div',
      { className: 'description-spoilers' },
      h(
        'div',
        { className: 'description-spoilers__left' },
        h('h1', { className: 'description-spoilers__title' }, title),
        h('div', {
          className: 'description-spoilers__description',
          dangerouslySetInnerHTML: {
            __html: description
          }
        })
      ),
      h(
        'div',
        { className: 'description-spoilers__right' },
        spoilers.map((spoiler) =>
          h(
            'div',
            { className: 'description-spoilers__spoiler' },
            h(
              'h4',
              { className: 'description-spoilers__spoiler-title' },
              spoiler.getIn(['title'])
            ),
            h('div', {
              className: 'description-spoilers__spoiler-text',
              dangerouslySetInnerHTML: {
                __html: spoiler.getIn(['description'])
              }
            })
          )
        )
      )
    )
  }
})
