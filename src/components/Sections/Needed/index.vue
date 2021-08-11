<template>
  <div class="needed">
    <div class="needed__header">
      <h1 class="needed__title">Что понадобиться от Вас?</h1>
    </div>
    <div class="needed__items">
      <figure class="needed__item">
        <div class="needed__img">
          <img src="@/assets/img/paint.png" alt="" />
        </div>
        <figcaption>Выбрать дизайн</figcaption>
      </figure>
      <figure class="needed__item">
        <div class="needed__img">
          <img src="@/assets/img/paint.png" alt="" />
        </div>
        <figcaption>Выбрать доменное имя и хостинг</figcaption>
      </figure>
      <figure class="needed__item">
        <div class="needed__img">
          <img src="@/assets/img/paint.png" alt="" />
        </div>
        <figcaption>Отправить начальный контент</figcaption>
      </figure>
      <figure class="needed__item needed__item--last">
        <div class="needed__img">
          <img src="@/assets/img/paint.png" alt="" />
        </div>
        <figcaption>Выбрать дизайн</figcaption>
      </figure>
    </div>
    <div class="needed__bottom">
      <h2 class="needed__subtitle">Остальное сделаем мы!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Needed'
}
</script>

<style lang="scss">
@import './Needed.scss';
</style>
