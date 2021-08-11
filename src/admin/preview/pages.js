/* eslint-disable indent */
/* eslint-disable no-undef */
export default createClass({
  render() {
    const { entry, widgetsFor } = this.props
    return h(
      'main',
      { className: 'main' },
      entry.getIn(['data', 'sections'])
        ? widgetsFor('sections').map((sections) => {
            if (sections.getIn(['data', 'type']) === 'hashtagLogo') {
              return h('div', {}, 'Хештег лого')
            } else if (
              sections.getIn(['data', 'type']) === 'descriptionImage'
            ) {
              return h('div', {}, 'Картинка с описанием')
            } else if (
              sections.getIn(['data', 'type']) === 'descriptionSpoilers'
            ) {
              return h('div', {}, 'Описанием со спойлерами')
            } else if (sections.getIn(['data', 'type']) === 'bannerLogo') {
              return h('div', {}, 'Баннер')
            } else if (sections.getIn(['data', 'type']) === 'needed') {
              return h('div', {}, 'Что требуется')
            } else if (sections.getIn(['data', 'type']) === 'offer') {
              return h('div', {}, 'Оффер')
            } else if (sections.getIn(['data', 'type']) === 'orderAnother') {
              return h('div', {}, 'Форма заказа (2)')
            } else if (sections.getIn(['data', 'type']) === 'order') {
              return h('div', {}, 'Форма заказа')
            } else if (sections.getIn(['data', 'type']) === 'other') {
              return h('div', {}, 'Доп. предложения')
            } else if (sections.getIn(['data', 'type']) === 'ourPortfolio') {
              return h('div', {}, 'Портфолио')
            } else if (sections.getIn(['data', 'type']) === 'service') {
              return h('div', {}, 'Услуга')
            } else if (sections.getIn(['data', 'type']) === 'stages') {
              return h('div', {}, 'Этапы')
            } else if (sections.getIn(['data', 'type']) === 'word') {
              return h('div', {}, 'Текст')
            }
            return false
          })
        : h('div', {}, 'Добавь секцию')
    )
  }
})
