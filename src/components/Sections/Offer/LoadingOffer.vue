<template>
  <div class="offer">
    <div class="offer__left">
      <skeleton class="offer__title" :width="200" :height="25" />
      <skeleton
        v-for="(item, index) in 6"
        :key="index"
        class="offer__description"
        width="100%"
        :height="10"
      />
    </div>
    <div class="offer__right">
      <skeleton
        class="offer__price"
        :width="200"
        :height="35"
        :style="{ justifySelf: 'center' }"
      />
      <skeleton
        class="offer__button"
        :width="130"
        :height="40"
        rounded
        :radius="20"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingOffer'
}
</script>
