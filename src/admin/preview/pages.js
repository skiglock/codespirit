/* eslint-disable indent */
/* eslint-disable no-undef */
export default createClass({
  render: function () {
    const { entry, widgetsFor } = this.props
    return h(
      'main',
      { className: 'main' },
      entry.getIn(['data', 'sections'])
        ? widgetsFor('sections').map((sections) => {
            if (sections.getIn(['data', 'type']) === 'banner') {
              return h('div', {}, 'Баннер')
            } else if (sections.getIn(['data', 'type']) === 'needed') {
              return h('div', {}, 'Что требуется')
            } else if (sections.getIn(['data', 'type']) === 'offer') {
              return h('div', {}, 'Оффер')
            } else if (sections.getIn(['data', 'type']) === 'order_another') {
              return h('div', {}, 'Форма заказа (2)')
            } else if (sections.getIn(['data', 'type']) === 'order') {
              return h('div', {}, 'Форма заказа')
            } else if (sections.getIn(['data', 'type']) === 'other') {
              return h('div', {}, 'Доп. предложения')
            } else if (sections.getIn(['data', 'type']) === 'portfolio') {
              return h('div', {}, 'Портфолио')
            } else if (sections.getIn(['data', 'type']) === 'service') {
              return h('div', {}, 'Услуга')
            } else if (sections.getIn(['data', 'type']) === 'stages') {
              return h('div', {}, 'Этапы')
            } else if (sections.getIn(['data', 'type']) === 'text') {
              return h('div', {}, 'Текст')
            }
            return false
          })
        : h('div', {}, 'Добавь секцию')
    )
  }
})
