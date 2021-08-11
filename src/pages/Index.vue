<template>
  <Layout :title="mainPage.title">
    <banner />
    <needed />
    <offer />
    <order />
    <order-another />
    <other />
    <portfolio />
    <service />
    <stages />
    <word />
    <hashtag-logo />
    <description-spoilers />
    <description-image />
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
import sections from '@/mixins/sections'
import { link } from '../../content/settings/main.yaml'
export default {
  mixins: [sections],
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
