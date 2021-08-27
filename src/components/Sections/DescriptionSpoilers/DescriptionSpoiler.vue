<template>
  <div class="description-spoilers__spoiler">
    <h4
      class="description-spoilers__spoiler-title"
      @click="spoilerOpen = !spoilerOpen"
    >
      {{ title }}
    </h4>
    <transition name="fade">
      <div
        v-if="spoilerOpen"
        class="description-spoilers__spoiler-text"
        v-html="description"
      ></div
    ></transition>
  </div>
</template>

<script>
export default {
  name: 'DescriptionSpoiler',
  data() {
    return {
      spoilerOpen: false
    }
  },
  props: {
    title: String,
    description: String
  }
}
</script>
