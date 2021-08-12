<template>
  <Layout title="Портфолио">
    <h1 v-for="{ node } in $static.allPortfolioCategory.edges" :key="node.id">
      {{ node.id }}
    </h1>
    <h2 v-for="{ node } in $static.allPortfolioCase.edges" :key="node.id">
      {{ node.title }}
    </h2>
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
}
</style>
