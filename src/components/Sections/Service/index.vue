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
export default {
  name: 'Service',
  props: {
    content: Object,
    path: String
  }
}
</script>

<style lang="scss">
@import './Service.scss';
</style>
