<template>
  <div class="description-image">
    <skeleton-loader
      height="200px"
      width="70%"
      radius="15px"
      :style="{ justifySelf: 'center', marginBottom: '2%' }"
    />
    <div
      class="description-image__description"
      :style="{ display: 'grid', justifyItems: 'end' }"
    >
      <skeleton-loader
        v-for="(item, index) in 5"
        :key="index"
        width="70%"
        height="12px"
        between="7px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionImageLoading'
}
</script>

<style lang="scss">
@import './DescriptionImage.scss';
</style>
