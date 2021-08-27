/* eslint-disable indent */
/* eslint-disable no-undef */

export default createClass({
  render() {
    const { buttonTitle } = this.props
    return h(
      'form',
      { className: 'form' },
      h(
        'div',
        { className: 'form__group' },
        h('label', { className: 'form__label' }, 'Имя'),
        h('input', { className: 'form__text', placeholder: 'Введите имя' })
      ),
      h(
        'div',
        { className: 'form__group' },
        h('label', { className: 'form__label' }, 'Телефон'),
        h('input', { className: 'form__text', placeholder: '+7' })
      ),
      h(
        'div',
        { className: 'form__group' },
        h('label', { className: 'form__label' }, 'E-mail'),
        h('input', {
          className: 'form__text',
          placeholder: 'Введите email адрес'
        })
      ),
      h(
        'div',
        { className: 'form__group' },
        h('label', { className: 'form__label' }, 'Расскажите о проекте'),
        h('input', {
          className: 'form__text form__text--large'
        })
      ),
      h('button', {
        className: 'button form__button button--white button--large',
        buttonTitle
      })
    )
  }
})
