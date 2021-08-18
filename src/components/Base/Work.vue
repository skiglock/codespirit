<template>
  <article class="work" :class="`${joinClass}`">
    <div class="work__left" :class="`${joinClass}-left`">
      <h1 class="work__title" :class="`${joinClass}-title`">{{ title }}</h1>
      <ul class="work__categories" :class="`${joinClass}-categories`">
        <li
          class="work__category"
          :class="`${joinClass}-category`"
          v-for="category in categories"
          :key="category.id"
        >
          <span>#{{ category.id }}</span>
        </li>
      </ul>
      <div class="work__img work__img--mobile">
        <g-image :src="img" :alt="title" />
      </div>

      <div class="work__description" v-if="description">
        <p>{{ description }}</p>
      </div>
      <Button :href="link" color="primary" size="small" class="work__button">
        Посмотреть
      </Button>
    </div>
    <div class="work__right">
      <figure class="work__img work__img--tablet" :class="`${joinClass}-img`">
        <g-image :src="img" :alt="title" />
      </figure>
    </div>
  </article>
</template>

<script>
import Button from '@/components/Base/Button'
export default {
  name: 'Work',
  props: {
    title: String,
    categories: Array,
    img: Object,
    description: String,
    joinClass: String,
    link: String
  },
  components: {
    Button
  }
}
</script>
