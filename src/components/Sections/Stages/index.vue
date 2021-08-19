<template>
  <div class="stages">
    <h2 class="stages__title">{{ content.title }}</h2>
    <div
      class="stages__body"
      :style="{
        backgroundColor: content.color,
        boxShadow: $boxShadow(content.color)
      }"
    >
      <div class="stages__left">
        <div class="stages__img">
          <g-image
            :src="content.img ? $imagePath('pages', path, content.img) : ''"
            :alt="content.title"
          />
        </div>
      </div>
      <div class="stages__right">
        <stages-item
          v-for="(item, index) in content.spoilers"
          :key="item.id"
          :num="index + 1"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StagesItem from './StagesItem'
export default {
  components: {
    StagesItem
  },
  name: 'Stages',
  props: {
    content: Object,
    path: String
  }
}
</script>

<style lang="scss">
@import './Stages.scss';
</style>
