<template>
  <div class="hashtag-logo">
    <h1 class="hashtag-logo__title"><span>#</span>{{ content.title }}</h1>
    <div
      class="hashtag-logo__description"
      :style="{
        backgroundColor: content.color,
        boxShadow: $boxShadow(content.color)
      }"
    >
      <p>{{ content.subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HashtagLogo',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
@import './HashtagLogo.scss';
</style>
