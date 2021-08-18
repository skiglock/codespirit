<template>
  <div
    class="order"
    :style="{
      backgroundColor: content.color,
      boxShadow: $boxShadow(content.color)
    }"
  >
    <div class="order__left">
      <h1 class="order__title">{{ content.title }}</h1>
      <div class="order__description" v-html="content.description"></div>
      <a href="tel:+79000000000" class="order__phone">+7 900 000 00 00</a>
    </div>
    <div class="order__right">
      <Form
        :title="content.title"
        email
        textarea
        :buttonTitle="content.button.title"
      />
    </div>
  </div>
</template>

<script>
import Form from '@/components/Base/Form'
export default {
  name: 'Order',
  props: {
    content: Object
  },
  components: {
    Form
  }
}
</script>

<style lang="scss">
@import './Order.scss';
</style>
