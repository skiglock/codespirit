<template>
  <div
    class="stages"
    :style="{
      backgroundColor: '#e5e5e5',
      boxShadow: 'none'
    }"
  >
    <div class="stages__left">
      <div class="stages__img">
        <skeleton-loader width="250px" height="150px" color="gray" />
      </div>
    </div>
    <div class="stages__right">
      <skeleton-loader
        v-for="(item, index) in 3"
        :key="index"
        height="40px"
        color="gray"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StagesLoading'
}
</script>

<style lang="scss">
@import './Stages';
</style>
