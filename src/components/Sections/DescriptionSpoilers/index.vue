<template>
  <div class="description-spoilers">
    <div class="description-spoilers__left">
      <skeleton-loader
        v-if="skeleton.isLoading"
        class="description-spoilers__title"
        width="50%"
      />
      <h1 v-else class="description-spoilers__title">{{ content.title }}</h1>
      <div v-if="skeleton.isLoading" class="description-spoilers__description">
        <skeleton-loader
          v-for="item in 5"
          :key="item"
          width="100%"
          between="5px"
          height="15px"
        />
      </div>
      <div
        v-else
        class="description-spoilers__description"
        v-html="content.description"
      ></div>
    </div>
    <div v-if="skeleton.isLoading" class="description-spoilers__right">
      <skeleton-loader
        v-for="item in content.spoilers"
        :key="item.id"
        class="description-spoilers__spoiler"
        width="60%"
        height="17px"
      />
    </div>
    <div v-else class="description-spoilers__right">
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
  inject: ['skeleton'],
  props: {
    content: Object,
    path: String
  }
}
</script>

<style lang="scss">
@import './DescriptionSpoilers.scss';
</style>
