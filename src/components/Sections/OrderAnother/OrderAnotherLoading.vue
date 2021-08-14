<template>
  <div
    class="order-another"
    :style="{
      backgroundColor: '#e5e5e5',
      boxShadow: 'none'
    }"
  >
    <div class="order-another__left">
      <form class="form">
        <div class="form__group">
          <label class="form__label">Имя</label>
          <input class="form__text" />
        </div>
        <div class="form__group">
          <label class="form__label">Телефон</label>
          <input class="form__text" />
        </div>
        <skeleton-loader
          width="50%"
          :style="{ boxShadow: 'none' }"
          color="gray"
          class="form__button button button--large"
          type="submit"
        />
        <span class="form__agree">
          * Нажимая кнопку <u>Оставить заявку</u>, вы даете согласие на
          обработку персональных данных
        </span>
      </form>
    </div>
    <div class="order-another__right">
      <h1
        class="order-another__title"
        :style="{ display: 'grid', justifyItems: 'center', boxShadow: 'none' }"
      >
        <skeleton-loader width="50%" height="20px" color="gray" />
      </h1>
      <skeleton-loader
        class="order-another__phone"
        width="60%"
        color="gray"
        :style="{ boxShadow: 'none' }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderAnotherLoading'
}
</script>

<style lang="scss">
@import './OrderAnother.scss';
</style>
