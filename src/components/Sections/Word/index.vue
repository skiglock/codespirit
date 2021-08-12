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
}
</style>
