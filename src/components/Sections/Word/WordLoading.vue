<template>
  <div class="word">
    <skeleton-loader
      v-for="(item, index) in 22"
      :key="index"
      height="10px"
      between="10px"
    />
  </div>
</template>

<script>
export default {
  name: 'WordLoading'
}
</script>
