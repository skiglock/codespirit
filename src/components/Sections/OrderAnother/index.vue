<template>
  <div
    class="order-another"
    :style="{
      backgroundColor: content.color,
      boxShadow: $boxShadow(content.color)
    }"
  >
    <div class="order-another__left">
      <Form :title="content.title" :buttonTitle="content.button.title" />
    </div>
    <div class="order-another__right">
      <h1 class="order-another__title">
        {{ content.title }}
      </h1>
      <div class="order-another__phone">
        <h2 class="order-another__number">+7 996 850 26 93</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Base/Form'
export default {
  name: 'OrderAnother',
  props: {
    content: Object
  },
  components: {
    Form
  }
}
</script>

<style lang="scss">
@import './OrderAnother.scss';
</style>
