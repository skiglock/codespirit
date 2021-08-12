<template>
  <div class="description-spoilers">
    <div class="description-spoilers__left">
      <h1 class="description-spoilers__title">{{ content.title }}</h1>
      <div
        class="description-spoilers__description"
        v-html="content.description"
      ></div>
    </div>
    <div class="description-spoilers__right">
      <description-spoiler
        v-for="spoiler in content.spoilers"
        :key="spoiler.id"
        :title="spoiler.title"
        :description="spoiler.description"
      />
    </div>
  </div>
</template>

<script>
import DescriptionSpoiler from './DescriptionSpoiler'
export default {
  name: 'DescriptionSpoilers',
  components: {
    DescriptionSpoiler
  },
  props: {
    content: Object,
    path: String
  }
}
</script>

<style lang="scss">
@import './DescriptionSpoilers.scss';
</style>
