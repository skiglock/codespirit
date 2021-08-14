<template>
  <div
    class="order"
    :style="{
      backgroundColor: '#e5e5e5',
      boxShadow: 'none'
    }"
  >
    <div class="order__left">
      <skeleton-loader
        class="order__title"
        color="gray"
        width="60%"
        height="25px"
      />
      <div class="order__description" :style="{ width: '90%' }">
        <skeleton-loader
          v-for="(item, index) in 5"
          :key="index"
          color="gray"
          width="100%"
          height="10px"
          between="5px"
        />
      </div>
      <a class="order__phone" :style="{ width: '100%' }">
        <skeleton-loader color="gray" width="60%" height="25px" between="5px"
      /></a>
    </div>
    <div class="order__right">
      <form class="order__form form" action="">
        <div class="form__group form__group--column">
          <div class="form__subgroup">
            <label class="form__label">Имя</label>
            <input class="form__text" />
          </div>
          <div class="form__subgroup">
            <label for="form-phone" class="form__label">Телефон</label>
            <input class="form__text" />
          </div>
        </div>
        <div class="form__group">
          <label for="form-mail" class="form__label">E-mail</label>
          <input class="form__text" />
        </div>
        <div class="form__group">
          <label for="form-message" class="form__label"
            >Расскажите о проекте</label
          >
          <textarea class="form__text form__text--large"></textarea>
        </div>
        <skeleton-loader
          color="gray"
          class="form__button button button--large"
          width="40%"
          type="submit"
          :style="{ boxShadow: 'none' }"
        />
        <span class="form__agree">
          * Нажимая кнопку, вы даете согласие на обработку персональных данных
        </span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderLoading'
}
</script>
<style lang="scss">
@import './Order.scss';
</style>
