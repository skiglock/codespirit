<template>
  <Layout title="Портфолио" class="portfolio">
    <h1 v-for="{ node } in $static.allPortfolioCategory.edges" :key="node.id">
      {{ node.id }}
    </h1>
    <h2 v-for="{ node } in $static.allPortfolioCase.edges" :key="node.id">
      {{ node.title }}
    </h2>
    <div
      class="portfolio-nav"
      role="navigation"
      aria-label="Меню портфолио"
      itemscope="itemscope"
      itemtype="http://www.schema.org/SiteNavigationElement"
    >
      <ul class="portfolio-nav__list">
        <li
          class="
            portfolio-nav__item
            portfolio-nav__item--all
            portfolio-nav__item--active
          "
        >
          <a href="#">Все кейсы</a>
        </li>
        <li class="portfolio-nav__item">
          <a href="#">Digital</a>
        </li>
        <li class="portfolio-nav__item">
          <a href="#">Креатив</a>
        </li>
        <li class="portfolio-nav__item">
          <a href="#">Production</a>
        </li>
        <li class="portfolio-nav__item">
          <a href="#">Дизайн</a>
        </li>
        <li class="portfolio-nav__item">
          <a href="#">SMM</a>
        </li>
        <li class="portfolio-nav__item">
          <a href="#">Веб-разработка</a>
        </li>
      </ul>
    </div>
    <div class="portfolio__works">
      <article class="portfolio__work work">
        <div class="work__left">
          <h1 class="portfolio__work-title work__title">COCA COLA</h1>
          <ul class="portfolio__work-categories work__categories">
            <li class="portfolio__work-category work__category">
              <span>#КРЕАТИВ</span>
            </li>
            <li class="portfolio__work-category work__category">
              <span>#ДИЗАЙН</span>
            </li>
            <li class="portfolio__work-category work__category">
              <span>#PRODUCTION</span>
            </li>
            <li class="portfolio__work-category work__category">
              <span>#ВЕБ-РАЗРАБОТКА</span>
            </li>
          </ul>
          <div class="portfolio__work-img work__img work__img--mobile">
            <img src="@/assets/img/Cola.png" alt="" />
          </div>

          <div class="work__description">
            <p>
              в 2020 году Coca-Cola выпустила ограниченную серию напитков с
              новым дизайном упаковок, на которых были написаны необычные
              комплименты. А мы помогли сделать так, чтобы об этом узнали все!
            </p>
          </div>
          <button class="work__button button button--primary button--small">
            Посмотреть
          </button>
        </div>
        <div class="work__right">
          <figure class="work__img work__img--tablet">
            <img src="@/assets/img/Cola.png" alt="" />
          </figure>
        </div>
      </article>
    </div>
  </Layout>
</template>

<static-query>
{
  allPortfolioCategory {
    edges {
      node {
        id
      }
    }
  }
  allPortfolioCase {
    edges {
      node {
        title
      }
    }
  }
}
</static-query>

<style lang="scss">
.portfolio {
  &-nav {
    display: none;
  }
  &__works {
    display: grid;
    gap: 20px;
    @media screen and (min-width: $small-mobile-width) {
      grid-template-columns: repeat(auto-fit, minmax(226px, 1fr));
    }
    @media screen and (min-width: $tablet-width) {
      gap: 30px;
      grid-template-columns: auto;
    }
  }
  &__work {
    @media screen and (min-width: $tablet-width) {
      display: grid;
      grid-template-columns: 1.4fr 2fr;
      gap: 30px;
    }
    &-title {
      text-align: center;
      font-size: 23px;
    }
    &-categories {
      display: none;
      @media screen and (min-width: $tablet-width) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(104px, 1fr));
        gap: 5px;
        justify-items: center;
      }
    }
    &-category {
      font-size: 10px;
    }
    &-img {
      box-shadow: 0px 2px 3.76px 0.24px rgba(#252525, 0.35);
      border-radius: 20px;
      img {
        border-radius: 20px;
      }
    }
  }
}
</style>
