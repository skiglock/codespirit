<template>
  <details class="description-spoilers__spoiler">
    <summary>{{ title }}</summary>
    <div class="description-spoilers__spoiler-text" v-html="description"></div>
  </details>
</template>

<script>
export default {
  name: 'DescriptionSpoiler',
  props: {
    title: String,
    description: String
  }
}
</script>
