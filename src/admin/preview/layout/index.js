/* eslint-disable indent */
/* eslint-disable no-undef */
const layoutClass = 'content'
export default createClass({
  render() {
    const { children, title } = this.props
    return h(
      'section',
      {
        className: `${layoutClass}`,
        style: {
          '--main_color': '#eb563a',
          '--main_color_hover': 'rgba(235, 86, 58, 0.8)',
          '--background_color': '#ffeab3',
          '--content_color': '#f7f7f7',
          '--footer_color': '#f5f5f5',
          margin: '20px 0'
        }
      },
      h(
        'div',
        {
          className: `${layoutClass}__wrapper`
        },
        h(
          'header',
          { className: `${layoutClass}__header` },
          h('h1', { className: `${layoutClass}__title` }, title)
        ),
        h('div', { className: `${layoutClass}__body` }, children)
      )
    )
  }
})
