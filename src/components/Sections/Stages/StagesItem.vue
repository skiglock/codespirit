<template>
  <div class="stages__item">
    <span class="stages__number">{{ num }}</span>
    <details class="stages__spoiler">
      <summary>{{ title }}</summary>
      <p class="stages__description">
        {{ description }}
      </p>
    </details>
  </div>
</template>

<script>
export default {
  name: 'StagesItem',
  props: {
    num: Number,
    title: String,
    description: String
  }
}
</script>
