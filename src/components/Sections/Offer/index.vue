<template>
  <div
    class="offer"
    :style="{
      backgroundColor: content.color,
      boxShadow: $boxShadow(content.color)
    }"
  >
    <div class="offer__left">
      <h1 class="offer__title">{{ content.title }}</h1>

      <div class="offer__description" v-html="content.description"></div>
    </div>
    <div class="offer__right">
      <h2 class="offer__price">от {{ content.price }}</h2>
      <Button
        @click.native="setModalSettings('Закажите Landing прямо сейчас!')"
        class="offer__button"
        type="button"
        color="white"
        size="large"
      >
        {{ content.button.title }}
      </Button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Button from '@/components/Base/Button'
export default {
  name: 'Offer',
  props: {
    content: Object
  },
  components: {
    Button
  },
  methods: {
    ...mapMutations('modal', ['setModalSettings'])
  }
}
</script>

<style lang="scss">
@import './Offer.scss';
</style>
