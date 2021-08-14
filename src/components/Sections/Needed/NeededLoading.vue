<template>
  <div
    class="needed"
    height="200px"
    :style="{ backgroundColor: '#e5e5e5', boxShadow: 'none' }"
  >
    <skeleton-loader
      class="needed__header"
      width="120px"
      color="gray"
      :style="{ boxShadow: 'none' }"
    />
    <div class="needed__items">
      <div class="needed__item" v-for="(item, index) in 4" :key="index">
        <skeleton-loader class="needed__img" color="gray" />
        <figcaption>
          <skeleton-loader color="gray" width="70px" height="16px" />
        </figcaption>
      </div>
    </div>
    <skeleton-loader
      class="needed__bottom"
      width="120px"
      color="gray"
      :style="{ boxShadow: 'none' }"
    />
  </div>
</template>

<script>
export default {
  name: 'NeededLoading'
}
</script>

<style lang="scss">
@import './Needed.scss';
</style>
