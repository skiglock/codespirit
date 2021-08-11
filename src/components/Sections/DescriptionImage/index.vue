<template>
  <div class="description-image description-image--row">
    <g-image
      :src="$imagePath('pages', path, content.img)"
      :alt="content.description"
    />
    <p>
      {{ content.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'DescriptionImage',
  props: {
    content: Object,
    path: String
  }
}
</script>

<style lang="scss">
@import './DescriptionImage.scss';
</style>
