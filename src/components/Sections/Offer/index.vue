<template>
  <div class="offer">
    <div class="offer__left">
      <h1 class="offer__title">Цена Landing страницы</h1>
      <p class="offer__description">
        Вы можете заказать лендинг любой сложности с индивидуальным дизайном или
        подать заявку на разработку посадочной страницы на готовом шаблоне от
        нашей компании
      </p>
    </div>
    <div class="offer__right">
      <h2 class="offer__price">от 50 000 руб.</h2>
      <button
        class="offer__button button button--large button--white"
        type="button"
      >
        Оставить заявку
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offer'
}
</script>

<style lang="scss">
@import './Offer.scss';
</style>
