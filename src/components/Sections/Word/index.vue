<template>
  <div class="word" v-html="content.description"></div>
</template>

<script>
export default {
  name: 'Word',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.word {
  margin-left: 3%;
  margin-right: 3%;
  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
  }
}
</style>
