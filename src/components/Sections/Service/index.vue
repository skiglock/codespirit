<template>
  <loading-service
    :first-color="content.color_first"
    :second-color="content.color_second"
    :variant="content.variant"
    v-if="skeleton.isLoading"
  />
  <div v-else class="service" :class="content.variant ? 'service--custom' : ''">
    <div
      class="service__name"
      :style="{
        backgroundColor: content.color_first,
        boxShadow: $boxShadow(content.color_first)
      }"
    >
      <span class="service__number" v-if="!content.variant"> 1 </span>
      <h2 class="service__title">{{ content.title }}</h2>
    </div>
    <div
      class="service__description"
      :style="{
        backgroundColor: content.color_second,
        boxShadow: $boxShadow(content.color_second)
      }"
    >
      <div class="service__description-img" v-if="!content.variant">
        <g-image
          :src="$imagePath('pages', path, content.img)"
          :alt="content.title"
        />
      </div>
      <h3 class="service__description-title" v-if="!content.variant">
        {{ content.title }}
      </h3>
      <p class="service__description-text">
        {{ content.description }}
      </p>
      <button
        class="service__description-button button button--primary button--small"
      >
        Посмотреть
      </button>
    </div>
  </div>
</template>

<script>
import LoadingService from './LoadingService'
export default {
  name: 'Service',
  inject: ['skeleton'],
  components: {
    LoadingService
  },
  props: {
    content: Object,
    path: String
  }
}
</script>

<style lang="scss">
@import './Service.scss';
</style>
