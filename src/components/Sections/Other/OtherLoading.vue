<template>
  <div
    class="other"
    :style="{
      backgroundColor: '#e5e5e5',
      boxShadow: 'none'
    }"
  >
    <h1 class="other__title">
      <skeleton-loader height="27px" color="gray" width="50%" />
    </h1>
    <ul class="other__list">
      <skeleton-loader
        class="other__item"
        v-for="(item, index) in 5"
        :key="index"
        height="27px"
        color="gray"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OtherLoading'
}
</script>

<style lang="scss">
@import './Other.scss';
</style>
