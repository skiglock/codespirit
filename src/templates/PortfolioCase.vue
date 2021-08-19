<template>
  <Layout :title="$page.portfolioCase.title">
    <div :style="{ textAlign: 'center' }">
      <strong
        :style="{ marginRight: '1em' }"
        v-for="category in $page.portfolioCase.categories"
        :key="category.id"
        >#{{ category.id }}</strong
      >
    </div>

    <g-image
      :style="{
        borderRadius: '30px',
        justifySelf: 'center'
      }"
      :src="
        $imagePath(
          'portfolio',
          $page.portfolioCase.path,
          $page.portfolioCase.img
        )
      "
    />
    <div v-html="descToHtml"></div>
  </Layout>
</template>

<script>
import { markedToHtml } from '@/utils/sanitizeSections'
export default {
  metaInfo() {
    return {
      title: this.$page.portfolioCase.title
    }
  },
  computed: {
    descToHtml() {
      return markedToHtml(this.$page.portfolioCase.description)
    }
  }
}
</script>

<page-query>
query ($id: ID!) {
  portfolioCase(id: $id) {
    title
    img
    path
    description
    categories {
      id
    }
  }
}
</page-query>
