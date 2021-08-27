/* eslint-disable indent */
/* eslint-disable no-undef */

export default createClass({
  render() {
    const { title, linkList } = this.props
    return h(
      'div',
      { className: 'our-portfolio' },
      h('h2', { className: 'our-portfolio__title' }, title),
      h(
        'div',
        { className: 'our-portfolio__list' },
        linkList.map((link) =>
          h(
            'article',
            { className: 'our-portfolio__work work' },
            h(
              'div',
              {
                className: 'our-portfolio__img work__img work__img--circle',
                style: { backgroundColor: 'lightgray' }
              },
              h('img')
            ),
            h(
              'h4',
              { className: 'our-portfolio__name work__title' },
              'Какой-то заголовок'
            ),
            h(
              'ul',
              { className: 'our-portfolio__categories work__categories' },
              h(
                'li',
                { className: 'our-portfolio__category work__category' },
                '#Категория'
              )
            ),
            h(
              'button',
              {
                className:
                  'button our-portfolio__button work__button button--primary button--small'
              },
              'Открыть'
            )
          )
        )
      )
    )
  }
})
