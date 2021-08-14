<template>
  <div class="our-portfolio">
    <article class="our-portfolio__work work">
      <skeleton-loader
        class="our-portfolio__img work__img work__img--circle"
        height="90%"
      />
      <h4 class="our-portfolio__title work__title">
        <skeleton-loader height="20px" />
      </h4>
      <ul class="our-portfolio__categories work__categories">
        <skeleton-loader
          class="our-portfolio__category work__category"
          v-for="(item, index) in 4"
          :key="index"
          height="10px"
          width="90%"
        />
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
  name: 'OutPortfolioLoading'
}
</script>

<style lang="scss">
@import './OurPortfolio.scss';
</style>
