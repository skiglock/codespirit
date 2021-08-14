<template>
  <div class="hashtag-logo">
    <h1
      class="hashtag-logo__title"
      :style="{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center' }"
    >
      <span>#</span><skeleton-loader width="200px" height="37px" />
    </h1>

    <skeleton-loader
      class="hashtag-logo__description"
      width="150px"
      height="33px"
      color="rgba(0,0,0, 0.1)"
    />
  </div>
</template>

<script>
export default {
  name: 'LoadingHashtagLogo'
}
</script>

<style lang="scss">
@import './HashtagLogo.scss';
</style>
