<template>
  <Layout>
    {{ mainPage.title }}
  </Layout>
</template>

<static-query>
{
  allPages {
    edges {
      node {
        id
        title
      }
    }
  }
}
</static-query>

<script>
import { link } from '../../content/settings/main.yaml'
export default {
  computed: {
    getMainPageId() {
      return link
    },
    mainPage() {
      return this.$static.allPages.edges.find(
        ({ node }) => node.id === this.getMainPageId
      ).node
    }
  }
}
</script>
