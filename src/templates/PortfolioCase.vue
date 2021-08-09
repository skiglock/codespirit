<template>
  <Layout>
    {{ $page.portfolioCase.title }}
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  portfolioCase(id: $id) {
    title
  }
}
</page-query>
