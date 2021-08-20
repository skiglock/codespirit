<template>
  <Layout title="Заявка отправлена">
    <g-image class="rocket" src="@/assets/img/rocket-large.gif" />
    <h1 class="success-title">
      Спасибо что оставили заявку! Мы уже спешим вам ответить &#128076;
    </h1>
  </Layout>
</template>
<script>
import { getWithExpiry } from '@/utils/localStorage'

export default {
  metaInfo() {
    return {
      title: 'Успешно! Мы свяжемся с вами'
    }
  },
  mounted() {
    if (process.isClient) {
      const showRocket = getWithExpiry('showRocket')
      if (!showRocket) {
        this.$router.push('/')
      }
    }
  }
}
</script>
<style lang="scss">
.success-title {
  margin: 20% auto;
  font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
  text-align: center;
}
.rocket {
  position: absolute;
  visibility: hidden;
  transform: rotate(-45deg);
  animation: fly 8s linear;
}
@media screen and (min-width: $desktop-width) {
  @keyframes fly {
    0% {
      visibility: visible;
      transform: translateX(910px) translateY(340px) rotate(-55deg);
    }
    100% {
      transform: translateX(-900px) translateY(-600px) rotate(-55deg);
    }
  }
}
</style>
