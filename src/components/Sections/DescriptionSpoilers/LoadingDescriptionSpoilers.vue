<template>
  <div class="description-spoilers">
    <div class="description-spoilers__left">
      <skeleton class="description-spoilers__title" :width="150" :height="20" />
      <div class="description-spoilers__description">
        <skeleton
          v-for="(item, index) in 5"
          :key="index"
          :height="15"
          :width="300"
          :style="{ marginTop: '5px' }"
        />
      </div>
    </div>
    <div class="description-spoilers__right">
      <skeleton
        class="description-spoilers__spoiler"
        v-for="(item, index) in spoilersLength"
        :key="index"
        :width="150"
        :height="15"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingDescriptionSpoilers',
  props: {
    spoilersLength: Number
  }
}
</script>
