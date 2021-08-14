<template>
  <div class="offer" :style="{ backgroundColor: '#e5e5e5', boxShadow: 'none' }">
    <div class="offer__left">
      <h1 class="offer__title">
        <skeleton-loader color="gray" height="20px" width="60%" />
      </h1>
      <div class="offer__description">
        <skeleton-loader
          v-for="(item, index) in 5"
          :key="index"
          color="gray"
          height="12px"
          width="100%"
          between="7px"
        />
      </div>
    </div>
    <div class="offer__right">
      <h2 class="offer__price" :style="{ justifySelf: 'center' }">
        <skeleton-loader color="gray" height="25px" width="160px" />
      </h2>
      <skeleton-loader
        color="gray"
        class="offer__button button button--large button--white"
        type="button"
        width="120px"
        :style="{ boxShadow: 'none' }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfferLoading'
}
</script>

<style lang="scss">
@import './Offer.scss';
</style>
