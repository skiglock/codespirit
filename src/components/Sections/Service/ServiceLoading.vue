<template>
  <div class="service">
    <div
      class="service__name"
      :style="{
        backgroundColor: '#e5e5e5',
        boxShadow: 'none'
      }"
    >
      <span class="service__number">1</span>
      <h2 class="service__title">
        <skeleton-loader color="gray" />
      </h2>
    </div>
    <div
      class="service__description"
      :style="{
        backgroundColor: '#e5e5e5',
        boxShadow: 'none'
      }"
    >
      <div class="service__description-img"></div>
      <h3 class="service__description-title">
        <skeleton-loader color="gray" width="60%" height="20px" />
      </h3>
      <div class="service__description-text">
        <skeleton-loader
          v-for="(item, index) in 5"
          :key="index"
          color="gray"
          width="100%"
          height="10px"
          between="5px"
        />
      </div>
      <button
        class="service__description-button button button--primary button--small"
      >
        Посмотреть
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ServiceLoading'
}
</script>

<style lang="scss">
@import './Service.scss';
</style>
