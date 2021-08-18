<template>
  <div
    class="other"
    :style="{
      backgroundColor: content.color,
      boxShadow: $boxShadow(content.color)
    }"
  >
    <h1 class="other__title">{{ content.title }}</h1>
    <div class="other__links">
      <Button
        :href="node.path"
        color="white"
        size="small"
        v-for="{ node } in filterAllPages"
        :key="node.id"
      >
        {{ node.title }}
      </Button>
    </div>
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
import Button from '@/components/Base/Button'
export default {
  name: 'Other',
  props: {
    content: Object
  },
  components: {
    Button
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
