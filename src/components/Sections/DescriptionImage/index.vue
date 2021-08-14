<template>
  <div
    class="description-image"
    :class="[
      content.position ? `description-image--${content.position}` : '',
      content.reverse ? 'description-image--reverse' : ''
    ]"
  >
    <g-image
      :src="$imagePath('pages', path, content.img)"
      :alt="content.description"
    />
    <div
      class="description-image__description"
      v-html="content.description"
    ></div>
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
