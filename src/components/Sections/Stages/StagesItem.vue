<template>
  <div class="stages__item">
    <span class="stages__number">{{ num }}</span>
    <div class="stages__spoiler" @click="spoilerOpen = !spoilerOpen">
      <h4 class="stages__spoiler-title">{{ title }}</h4>
      <transition name="fade">
        <div
          v-if="spoilerOpen"
          class="stages__spoiler-description"
          v-html="description"
        ></div
      ></transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StagesItem',
  props: {
    num: Number,
    title: String,
    description: String
  },
  data() {
    return {
      spoilerOpen: false
    }
  }
}
</script>
