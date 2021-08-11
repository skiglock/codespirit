<template>
  <div class="service">
    <div class="service__name">
      <span class="service__number"> 1 </span>
      <h2 class="service__title">Web разработка</h2>
    </div>
    <div class="service__description">
      <h3 class="service__description-title">Web-разработка</h3>
      <p class="service__description-text">
        Процесс создания веб-сайта или веб-приложения. Основными этапами
        процесса являются веб-дизайн, вёрстка страниц, программирование на
        стороне клиента и сервера, а также конфигурирование веб-сервера.
      </p>
      <button
        class="service__description-button button button--primary button--small"
      >
        Посмотреть
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service'
}
</script>

<style lang="scss">
@import './Service.scss';
</style>
