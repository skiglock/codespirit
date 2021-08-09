<template>
  <Layout>
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
