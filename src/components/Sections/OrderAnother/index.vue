<template>
  <div
    class="order-another"
    :style="{
      backgroundColor: content.color,
      boxShadow: $boxShadow(content.color)
    }"
  >
    <div class="order-another__left">
      <form class="form" action="">
        <div class="form__group">
          <label for="form-name" class="form__label">Имя</label>
          <input
            class="form__text"
            aria-label="Введите имя"
            type="text"
            name="name"
            id="form-name"
            required
            placeholder="Имя"
          />
        </div>
        <div class="form__group">
          <label for="form-phone" class="form__label">Телефон</label>
          <input
            class="form__text"
            aria-label="Введите телефон"
            type="tel"
            name="phone"
            id="form-phone"
            required
            placeholder="Телефон"
          />
        </div>
        <button
          class="form__button button button--large button--yellow"
          type="submit"
        >
          {{ content.button.title }}
        </button>
        <span class="form__agree">
          * Нажимая кнопку <u>Оставить заявку</u>, вы даете согласие на
          обработку персональных данных
        </span>
      </form>
    </div>
    <div class="order-another__right">
      <h1 class="order-another__title">
        {{ content.title }}
      </h1>
      <div class="order-another__phone">
        <h2 class="order-another__number">+7 996 850 26 93</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderAnother',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
@import './OrderAnother.scss';
</style>
