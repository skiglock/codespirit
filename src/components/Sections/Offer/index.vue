<template>
  <div
    class="offer"
    :style="{
      backgroundColor: content.color,
      boxShadow: $boxShadow(content.color)
    }"
  >
    <div class="offer__left">
      <skeleton-loader
        v-if="skeleton.isLoading"
        class="offer__title"
        width="60%"
        height="25px"
      />
      <h1 v-else class="offer__title">{{ content.title }}</h1>
      <div v-if="skeleton.isLoading" class="offer__description">
        <skeleton-loader
          v-for="item in 7"
          :key="item"
          width="100%"
          height="12px"
          between="7px"
        />
      </div>

      <div v-else class="offer__description" v-html="content.description"></div>
    </div>
    <div class="offer__right">
      <skeleton-loader
        v-if="skeleton.isLoading"
        class="offer__price"
        width="60%"
        :style="{ justifySelf: 'center' }"
        height="25px"
      />
      <h2 v-else class="offer__price">от {{ content.price }}</h2>
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
  inject: ['skeleton'],
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
@import './Offer.scss';
</style>
