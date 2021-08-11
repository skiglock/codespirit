<template>
  <div class="our-portfolio">
    <article class="our-portfolio__work work">
      <div class="our-portfolio__img work__img work__img--circle">
        <img src="@/assets/img/worker.png" alt="" />
      </div>
      <h4 class="our-portfolio__title work__title">Лендинг для Автосервиса</h4>
      <ul class="our-portfolio__categories work__categories">
        <li class="our-portfolio__category work__category">
          <span>#КРЕАТИВ</span>
        </li>
        <li class="our-portfolio__category work__category">
          <span>#ДИЗАЙН</span>
        </li>
        <li class="our-portfolio__category work__category">
          <span>#PRODUCTION</span>
        </li>
        <li class="our-portfolio__category work__category">
          <span>#ВЕБ-РАЗРАБОТКА</span>
        </li>
      </ul>
      <button
        class="
          our-portfolio__button
          work__button
          button button--primary button--small
        "
      >
        Открыть
      </button>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Portfolio'
}
</script>

<style lang="scss">
@import './Portfolio.scss';
</style>
