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
    <template v-if="skeleton.isLoading">
      <skeleton-loader
        class="description-image__description"
        v-for="item in 5"
        :key="item"
        width="83%"
        height="12px"
      />
    </template>
    <div
      v-else
      class="description-image__description"
      v-html="content.description"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionImage',
  inject: ['skeleton'],
  props: {
    content: Object,
    path: String
  }
}
</script>

<style lang="scss">
@import './DescriptionImage.scss';
</style>
