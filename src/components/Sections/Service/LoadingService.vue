<template>
  <div class="service" :class="variant ? 'service--custom' : ''">
    <div class="service__name" :style="{ backgroundColor: firstColor }">
      <div class="service__number">1</div>
      <skeleton class="service__title" width="100%" height="30px" />
    </div>
    <div class="service__description" :style="{ backgroundColor: secondColor }">
      <div class="service__description-img"></div>
      <skeleton
        class="service__description-title"
        width="60%"
        height="20px"
      ></skeleton>
      <div class="service__description-text">
        <skeleton
          v-for="(item, index) in 5"
          :key="index"
          height="12px"
          width="100%"
          :style="{ marginTop: '5px' }"
        />
      </div>
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
  name: 'LoadingService',
  props: {
    firstColor: String,
    secondColor: String,
    variant: Boolean
  }
}
</script>
