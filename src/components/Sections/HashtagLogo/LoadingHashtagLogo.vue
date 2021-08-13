<template>
  <div class="hashtag-logo">
    <h1
      class="hashtag-logo__title"
      :style="{ display: 'flex', alignItems: 'center' }"
    >
      <span>#</span
      ><skeleton class="hashtag-logo__title" :width="230" :height="40" />
    </h1>

    <div
      class="hashtag-logo__description"
      :style="{
        backgroundColor: color,
        paddingTop: '9px',
        paddingBottom: '7px'
      }"
    >
      <skeleton class="hashtag-logo__title" :width="140" :height="25" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingHashtagLogo',
  props: {
    color: String
  }
}
</script>
