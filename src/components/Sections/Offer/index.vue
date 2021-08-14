<template>
  <div
    class="offer"
    :style="{
      backgroundColor: content.color,
      boxShadow: $boxShadow(content.color)
    }"
  >
    <div class="offer__left">
      <h1 class="offer__title">{{ content.title }}</h1>

      <div class="offer__description" v-html="content.description"></div>
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
