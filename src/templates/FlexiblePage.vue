<template>
  <Layout :title="$page.pages.title">
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
