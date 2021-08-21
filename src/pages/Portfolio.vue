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
        <li class="portfolio-nav__item">
          <a
            class="portfolio-nav__link"
            :class="selectedCategory ? '' : 'portfolio-nav__link--active'"
            @click="checkClickedCategory('')"
            >Все кейсы</a
          >
        </li>
        <li
          class="portfolio-nav__item"
          v-for="category in $page.allPortfolioCategory.edges"
          :key="category.node.id"
        >
          <a
            class="portfolio-nav__link"
            @click="checkClickedCategory(category.node.id)"
            :class="
              selectedCategory === category.node.id
                ? 'portfolio-nav__link--active'
                : ''
            "
          >
            {{ category.node.id }}
          </a>
        </li>
      </ul>
    </div>
    <div class="portfolio__works">
      <Work
        v-animate="'enter'"
        joinClass="portfolio__work"
        v-for="{ node } in filterPortfolioCases"
        :key="node.id"
        :title="node.title"
        :categories="node.categories"
        :img="node.img ? $imagePath('portfolio', node.path, node.img) : ''"
        :description="node.description"
        :link="node.path"
      />
    </div>
    <ClientOnly>
      <infinite-loading @infinite="infiniteHandler" spinner="spiral">
        <span slot="no-more"></span>
        <span slot="no-results"></span>
      </infinite-loading>
    </ClientOnly>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allPortfolioCase(
    perPage: 2
    page: $page
    filter: { published: { eq: true } }
  ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
  allPortfolioCategory {
    edges {
      node {
        id
      }
    }
  }
}
</page-query>

<script>
import InfiniteLoading from 'vue-infinite-loading'

import Work from '@/components/Base/Work'
export default {
  data() {
    return {
      loadedPortfolioCases: [],
      filterPortfolioCases: [],
      currentPage: 1,
      selectedCategory: ''
    }
  },
  components: {
    InfiniteLoading,
    Work
  },
  metaInfo() {
    return {
      title: 'Портфолио'
    }
  },
  methods: {
    checkClickedCategory(clickedCategory) {
      this.selectedCategory = clickedCategory
      if (!this.selectedCategory) {
        this.filterPortfolioCases = this.loadedPortfolioCases
      } else {
        this.filterPortfolioCases = this.filterAllCategory
      }
    },
    async infiniteHandler($state) {
      if (
        this.currentPage + 1 >
        this.$page.allPortfolioCase.pageInfo.totalPages
      ) {
        $state.complete()
      } else {
        const { data } = await this.$fetch(`/portfolio/${this.currentPage + 1}`)
        if (data.allPortfolioCase.edges.length) {
          this.currentPage = data.allPortfolioCase.pageInfo.currentPage
          this.loadedPortfolioCases.push(...data.allPortfolioCase.edges)
          $state.loaded()
        } else {
          $state.complete()
        }
      }
    }
  },
  computed: {
    filterAllCategory() {
      return this.loadedPortfolioCases.filter((edge) =>
        edge.node.categories.some(
          (category) => category.id === this.selectedCategory
        )
      )
    }
  },
  watch: {
    selectedCategory(value) {
      localStorage.setItem('selectedCategory', value)
    }
  },
  created() {
    const selectedCategoryLocalStorage =
      localStorage.getItem('selectedCategory')
    if (selectedCategoryLocalStorage) {
      this.selectedCategory = selectedCategoryLocalStorage
    } else {
      this.filterPortfolioCases.push(...this.$page.allPortfolioCase.edges)
    }
    this.loadedPortfolioCases.push(...this.$page.allPortfolioCase.edges)
    this.filterPortfolioCases.push(...this.filterAllCategory)
  }
}
</script>

<style lang="scss">
.portfolio {
  &-nav {
    background-color: #fff;
    padding: 15px 10px;
    box-shadow: 0px 2px 3.76px 0.24px rgba(#000, 0.35);
    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fill, 130px);
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      list-style-type: none;
    }
    &__item {
      justify-self: center;
    }
    &__link {
      cursor: pointer;
      position: relative;
      font-size: 17px;
      font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
      color: #252525;
      text-decoration: none;
      transition: color 0.1s linear;
      &--active {
        &::before {
          position: absolute;
          content: '';
          border-radius: 5px;
          width: 100%;
          height: 4px;
          background-color: var(--main_color);
          top: 22px;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
      &:hover {
        &::before {
          position: absolute;
          content: '';
          border-radius: 5px;
          width: 100%;
          height: 4px;
          background-color: var(--main_color);
          top: 22px;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
    }
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
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
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
