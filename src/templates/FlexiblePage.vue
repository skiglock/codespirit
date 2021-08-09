<template>
  <Layout>
    <h1>Страница</h1>
    <br />
    {{ $page.pages.title }}
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  pages(id: $id) {
    title
  }
}
</page-query>
