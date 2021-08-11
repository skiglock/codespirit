<template>
  <div class="service">
    <div
      class="service__name"
      :style="{ backgroundColor: content.color_first }"
    >
      <span class="service__number"> 1 </span>
      <h2 class="service__title">{{ content.title }}</h2>
    </div>
    <div
      class="service__description"
      :style="{ backgroundColor: content.color_second }"
    >
      <div class="service__description-img">
        <g-image src="@/assets/img/browser.png" :alt="content.title" />
      </div>
      <h3 class="service__description-title">{{ content.title }}</h3>
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
