<template>
  <div class="service" :class="content.variant ? 'service--custom' : ''">
    <div
      class="service__name"
      :style="{
        backgroundColor: content.color_first,
        boxShadow: $boxShadow(content.color_first)
      }"
    >
      <span class="service__number" v-if="!content.variant"> 1 </span>
      <skeleton-loader v-if="skeleton.isLoading" width="100%" height="25px" />
      <h2 v-else class="service__title">{{ content.title }}</h2>
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
      <skeleton-loader
        v-if="skeleton.isLoading"
        class="service__description-title"
        width="60%"
      />
      <h3
        class="service__description-title"
        v-if="!content.variant && !skeleton.isLoading"
      >
        {{ content.title }}
      </h3>
      <div v-if="skeleton.isLoading" class="service__description-text">
        <skeleton-loader
          v-for="item in 5"
          :key="item"
          width="80%"
          height="10px"
          between="5px"
        />
      </div>

      <p v-else class="service__description-text">
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
export default {
  name: 'Service',
  inject: ['skeleton'],
  props: {
    content: Object,
    path: String
  }
}
</script>

<style lang="scss">
@import './Service.scss';
</style>
