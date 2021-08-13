<template>
  <div class="hashtag-logo">
    <h1
      class="hashtag-logo__title"
      :style="
        skeleton.isLoading ? { display: 'flex', alignItems: 'center' } : ''
      "
    >
      <span>#</span>
      <skeleton-loader
        v-if="skeleton.isLoading"
        width="210px"
        height="40px"
      />{{ skeleton.isLoading ? '' : content.title }}
    </h1>
    <div
      class="hashtag-logo__description"
      :style="{
        backgroundColor: content.color,
        boxShadow: $boxShadow(content.color)
      }"
    >
      <p>
        <skeleton-loader v-if="skeleton.isLoading" width="130px" />{{
          skeleton.isLoading ? '' : content.subtitle
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HashtagLogo',
  inject: ['skeleton'],
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
@import './HashtagLogo.scss';
</style>
