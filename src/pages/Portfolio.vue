<template>
  <Layout title="Портфолио" class="portfolio">
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
        <li
          class="portfolio-nav__item"
          v-for="category in $static.allPortfolioCategory.edges"
          :key="category.node.id"
        >
          <a href="#">{{ category.node.id }}</a>
        </li>
      </ul>
    </div>
    <div class="portfolio__works">
      <Work
        v-animate="'enter'"
        joinClass="portfolio__work"
        v-for="{ node } in $static.allPortfolioCase.edges"
        :key="node.id"
        :title="node.title"
        :categories="node.categories"
        :img="node.img ? $imagePath('portfolio', node.path, node.img) : ''"
        :description="node.description"
        :link="node.path"
      />
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
  allPortfolioCase(filter: { published: { eq: true } }) {
    edges {
      node {
        id
        published
        title
        path
        description
        categories {
          id
        }
        img
      }
    }
  }
}
</static-query>

<script>
import Work from '@/components/Base/Work'
export default {
  components: {
    Work
  },
  metaInfo() {
    return {
      title: 'Портфолио'
    }
  }
}
</script>

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
    &-left {
      box-shadow: 0px 2px 3.76px 0.24px rgba(#252525, 0.35);
    }
    &-category {
      font-size: 13px;
    }
    &-img {
      box-shadow: 0px 2px 3.76px 0.24px rgba(37, 37, 37, 0.35);
      border-radius: 20px;
      img {
        border-radius: 20px;
      }
    }
  }
}
</style>
