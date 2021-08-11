<template>
  <div class="banner-logo">
    <div class="banner-logo__img">
      <g-image
        :src="$imagePath('pages', path, content.img)"
        :alt="content.title"
      />
    </div>
    <div class="banner-logo__header">
      <h1 class="banner-logo__title">{{ content.title }}</h1>
    </div>
    <div class="banner-logo__bottom">
      <h2 class="banner-logo__subtitle">{{ content.subtitle }}</h2>
      <div class="banner-logo__description">
        <p>
          {{ content.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerLogo',
  props: {
    content: Object,
    path: String
  }
}
</script>

<style lang="scss">
@import './BannerLogo.scss';
</style>
