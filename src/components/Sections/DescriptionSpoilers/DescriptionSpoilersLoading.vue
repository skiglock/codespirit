<template>
  <div class="description-spoilers">
    <div class="description-spoilers__left">
      <skeleton-loader
        class="description-spoilers__title"
        width="50%"
        height="18px"
      />
      <div class="description-spoilers__description">
        <skeleton-loader
          v-for="item in 5"
          :key="item"
          between="8px"
          height="13px"
        />
      </div>
    </div>
    <div class="description-spoilers__right">
      <skeleton-loader
        v-for="item in 5"
        :key="item"
        class="description-spoilers__spoiler"
        width="60%"
        height="15px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionSpoilersLoading'
}
</script>

<style lang="scss">
@import './DescriptionSpoilers.scss';
</style>
