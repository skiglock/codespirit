<template>
  <div class="our-portfolio">
    <h2 class="our-portfolio__title">{{ content.title }}</h2>
    <div class="our-portfolio__list">
      <our-portfolio-work
        v-for="{ node } in filterAllPortfolioCase"
        :key="node.id"
        :title="node.title"
        :img="$imagePath('portfolio', node.path, node.img)"
        :categories="node.categories"
        :link="node.path"
      />
    </div>
  </div>
</template>

<static-query>
{
  allPortfolioCase(filter: { published: { eq: true } }) {
    edges {
      node {
        id
        img
        title
        categories {
          id
        }
        path
      }
    }
  }
}
</static-query>

<script>
import OurPortfolioWork from './OurPortfolioWork'
export default {
  name: 'OurPortfolio',
  props: {
    content: Object
  },
  components: {
    OurPortfolioWork
  },
  computed: {
    filterAllPortfolioCase() {
      return this.$static.allPortfolioCase.edges.filter((edge) =>
        this.content.link_list.some((lItem) => edge.node.id === lItem.link)
      )
    }
  }
}
</script>

<style lang="scss">
@import './OurPortfolio.scss';
</style>
