<template>
  <div
    class="needed"
    :style="{
      backgroundColor: content.color,
      boxShadow: $boxShadow(content.color)
    }"
  >
    <div
      class="needed__header"
      :style="{
        backgroundColor: content.color_first,
        boxShadow: $boxShadow(content.color_first)
      }"
    >
      <h1 class="needed__title">{{ content.title }}</h1>
    </div>
    <div class="needed__items">
      <needed-item
        v-for="item in content.items"
        :key="item.id"
        :title="item.title"
        :img="$imagePath('pages', path, item.img)"
      />
    </div>
    <div
      class="needed__bottom"
      :style="{
        backgroundColor: content.color_second,
        boxShadow: $boxShadow(content.color_second)
      }"
    >
      <h2 class="needed__subtitle">{{ content.subtitle }}</h2>
    </div>
  </div>
</template>

<script>
import NeededItem from './NeededItem'
export default {
  components: {
    NeededItem
  },
  name: 'Needed',
  props: {
    content: Object,
    path: String
  }
}
</script>

<style lang="scss">
@import './Needed.scss';
</style>
