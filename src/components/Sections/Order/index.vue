<template>
  <div
    class="order"
    :style="{
      backgroundColor: content.color,
      boxShadow: $boxShadow(content.color)
    }"
  >
    <div class="order__left">
      <h1 class="order__title">{{ content.title }}</h1>
      <div class="order__description" v-html="content.description"></div>
      <a href="tel:+79000000000" class="order__phone">+7 900 000 00 00</a>
    </div>
    <div class="order__right">
      <form class="order__form form" action="">
        <div class="form__group form__group--column">
          <div class="form__subgroup">
            <label for="form-name" class="form__label">Имя</label>
            <input
              class="form__text"
              aria-label="Имя"
              type="text"
              name="name"
              id="form-name"
              required
              placeholder="Введите ваше имя"
            />
          </div>
          <div class="form__subgroup">
            <label for="form-phone" class="form__label">Телефон</label>
            <input
              class="form__text"
              aria-label="Телефон"
              type="tel"
              name="phone"
              id="form-phone"
              required
              placeholder="+7"
            />
          </div>
        </div>
        <div class="form__group">
          <label for="form-mail" class="form__label">E-mail</label>
          <input
            class="form__text"
            aria-label="Почта"
            type="text"
            name="mail"
            id="form-mail"
            required
            placeholder="Введите email адрес"
          />
        </div>
        <div class="form__group">
          <label for="form-message" class="form__label"
            >Расскажите о проекте</label
          >
          <textarea
            class="form__text form__text--large"
            aria-label="Сообщение"
            type="text"
            name="message"
            id="form-message"
            required
          ></textarea>
        </div>
        <button
          class="form__button button button--large button--white"
          type="submit"
        >
          {{ content.button.title }}
        </button>
        <span class="form__agree">
          * Нажимая кнопку, вы даете согласие на обработку персональных данных
        </span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
@import './Order.scss';
</style>
