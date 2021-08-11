<template>
  <div class="stages">
    <div class="stages__left">
      <div class="stages__img">
        <img src="@/assets/img/stages.png" alt="" />
      </div>
    </div>
    <div class="stages__right">
      <div class="stages__item">
        <span class="stages__number"> 01 </span>
        <details class="stages__spoiler">
          <summary>Аналитика & проектирование</summary>
          <p class="stages__description">
            Проведем аудит Вашей компании и изучим возможности и конкурентные
            преимущества продукта. Анализ рынка и целевой аудитории поможет
            выявить боли и потребности потенциального клиента.
          </p>
        </details>
      </div>
      <div class="stages__item">
        <span class="stages__number"> 02 </span>
        <details class="stages__spoiler">
          <summary>Создание UX-прототипа и копирайтинг</summary>
          <p class="stages__description">
            Проведем аудит Вашей компании и изучим возможности и конкурентные
            преимущества продукта. Анализ рынка и целевой аудитории поможет
            выявить боли и потребности потенциального клиента.
          </p>
        </details>
      </div>
      <div class="stages__item">
        <span class="stages__number"> 03 </span>
        <details class="stages__spoiler">
          <summary>UI - Дизайн</summary>
          <p class="stages__description">
            Проведем аудит Вашей компании и изучим возможности и конкурентные
            преимущества продукта. Анализ рынка и целевой аудитории поможет
            выявить боли и потребности потенциального клиента.
          </p>
        </details>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stages'
}
</script>

<style lang="scss">
@import './Stages.scss';
</style>
