<template>
  <div class="service" :class="content.variant ? 'service--custom' : ''">
    <div
      class="service__name"
      :style="{
        backgroundColor: content.color_first,
        boxShadow: $boxShadow(content.color_first)
      }"
    >
      <span class="service__number" v-if="!content.variant">{{
        content.number
      }}</span>
      <h2 class="service__title">{{ content.title }}</h2>
    </div>
    <div
      class="service__description"
      :style="{
        backgroundColor: content.color_second,
        boxShadow: $boxShadow(content.color_second)
      }"
    >
      <div class="service__description-img" v-if="!content.variant">
        <g-image
          :src="content.img ? $imagePath('pages', path, content.img) : ''"
          :alt="content.title"
        />
      </div>
      <h3 class="service__description-title" v-if="!content.variant">
        {{ content.title }}
      </h3>
      <div class="service__description-text" v-html="content.description"></div>
      <Button
        class="service__description-button"
        :href="findLink"
        color="primary"
        size="small"
      >
        Посмотреть
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
        path
      }
    }
  }
}
</static-query>

<script>
import Button from '@/components/Base/Button'
export default {
  name: 'Service',
  props: {
    content: Object,
    path: String
  },
  components: {
    Button
  },
  computed: {
    findLink() {
      return this.$static.allPages.edges.find(
        (edge) => edge.node.id === this.content.link
      ).node.path
    }
  }
}
</script>

<style lang="scss">
@import './Service.scss';
</style>
