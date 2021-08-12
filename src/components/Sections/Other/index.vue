<template>
  <div
    class="other"
    :style="{
      backgroundColor: content.color,
      boxShadow: $boxShadow(content.color)
    }"
  >
    <h1 class="other__title">{{ content.title }}</h1>
    <ul class="other__list">
      <li class="other__item" v-for="{ node } in filterAllPages" :key="node.id">
        <g-link class="other__link" :to="node.path">{{ node.title }}</g-link>
      </li>
    </ul>
  </div>
</template>

<static-query>
{
  allPages {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'Other',
  props: {
    content: Object
  },
  computed: {
    filterAllPages() {
      return this.$static.allPages.edges.filter((edge) =>
        this.content.link_list.some((lItem) => edge.node.id === lItem.link)
      )
    }
  }
}
</script>

<style lang="scss">
@import './Other.scss';
</style>
