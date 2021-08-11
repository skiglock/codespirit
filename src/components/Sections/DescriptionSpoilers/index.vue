<template>
  <div class="description-spoilers">
    <div class="description-spoilers__left">
      <h1 class="description-spoilers__title">Направления услуг</h1>
      <p class="description-spoilers__description">
        Мы начинали с Social Media Marketing,но это только один из каналов,
        который помогает бренду выстроить отношения с аудиторией. Поэтому мы
        работаем с любыми digital-задачами: креатив, веб-разработка, стратегии,
        дизайн, продакшн.
      </p>
    </div>
    <div class="description-spoilers__right">
      <details class="description-spoilers__spoiler">
        <summary>Creative & Strategy</summary>
        <ul class="description-spoilers__list">
          <li class="description-spoilers__item">
            <span>Креативная стратегия</span>
          </li>
          <li class="description-spoilers__item">
            <span>YouTube-канал под ключ</span>
          </li>
          <li class="description-spoilers__item">
            <span>Стратегия присутствия в социальных сетях</span>
          </li>
          <li class="description-spoilers__item">
            <span>Digital-стратегия</span>
          </li>
        </ul>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionSpoilers'
}
</script>

<style lang="scss">
@import './DescriptionSpoilers.scss';
</style>
