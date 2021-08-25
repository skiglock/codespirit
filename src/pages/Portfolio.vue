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
          v-for="category in $static.allPortfolioCategory.edges"
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
        v-for="{ node } in filteredCategoryArray"
        :key="node.id"
        :title="node.title"
        :categories="node.categories"
        :img="node.img ? $imagePath('portfolio', node.path, node.img) : ''"
        :description="node.description"
        :link="node.path"
        :technologies="node.technologies"
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
        technologies {
          id
          link
        }
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
  data() {
    return {
      filteredCategoryArray: [],
      selectedCategory: ''
    }
  },
  components: {
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
        this.filteredCategoryArray = this.setAllCategory
      } else {
        this.filteredCategoryArray = this.filterAllCategory
      }
    }
  },
  computed: {
    setAllCategory() {
      return this.$static.allPortfolioCase.edges
    },
    filterAllCategory() {
      return this.setAllCategory.filter((edge) =>
        edge.node.categories.some(
          (category) => category.id === this.selectedCategory
        )
      )
    }
  },
  mounted() {
    this.filteredCategoryArray = this.setAllCategory
  }
  // watch: {
  //   selectedCategory(value) {
  //     if (process.isClient) {
  //       localStorage.setItem('selectedCategory', value)
  //     }
  //   }
  // },
  // mounted() {
  //   if (process.isClient) {
  //     const selectedCategoryLocalStorage =
  //       localStorage.getItem('selectedCategory')
  //     if (selectedCategoryLocalStorage) {
  //       this.selectedCategory = selectedCategoryLocalStorage
  //       this.filteredCategoryArray = this.filterAllCategory
  //     } else {
  //       this.filteredCategoryArray = this.setAllCategory
  //     }
  //   }
  // }
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
      grid-template-columns: repeat(auto-fill, 120px);
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
