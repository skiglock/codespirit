<template>
  <article class="our-portfolio__work work">
    <div class="our-portfolio__img work__img work__img--circle">
      <g-image :src="img" :alt="title" />
    </div>
    <h4 class="our-portfolio__title work__title">{{ title }}</h4>
    <ul class="our-portfolio__categories work__categories">
      <li
        class="our-portfolio__category work__category"
        v-for="category in categories"
        :key="category.id"
      >
        <span>#{{ category.id }}</span>
      </li>
    </ul>
    <Button
      :href="link"
      class="our-portfolio__button work__button"
      color="primary"
      size="small"
    >
      Открыть
    </Button>
  </article>
</template>

<script>
import Button from '@/components/Base/Button'
export default {
  name: 'OurPortfolioWork',
  props: {
    title: String,
    img: Object,
    categories: Array,
    link: String
  },
  components: {
    Button
  }
}
</script>
