<template>
  <div class="offer">
    <div class="offer__left">
      <h1 class="offer__title">{{ content.title }}</h1>
      <p class="offer__description">
        {{ content.description }}
      </p>
    </div>
    <div class="offer__right">
      <h2 class="offer__price">от {{ content.price }}</h2>
      <button
        class="offer__button button button--large button--white"
        type="button"
      >
        {{ content.button.title }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offer',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
@import './Offer.scss';
</style>
