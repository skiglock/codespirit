<template>
  <article class="work" :class="`${joinClass}`">
    <div class="work__left" :class="`${joinClass}-left`">
      <h1 class="work__title" :class="`${joinClass}-title`">
        {{ title.toUpperCase() }}
      </h1>
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
      <div class="work__img work__img--mobile" :class="`${joinClass}-img`">
        <g-image :src="img" :alt="title" />
      </div>

      <div
        class="work__description"
        v-if="description"
        v-html="descToHtml"
      ></div>
      <Button :href="link" color="primary" size="small" class="work__button">
        Посмотреть
      </Button>
    </div>
    <div class="work__right">
      <figure class="work__img work__img--tablet" :class="`${joinClass}-img`">
        <g-image :src="img" :alt="title" />
        <figcaption v-if="technologies.length > 0" class="work__technologies">
          <a
            v-for="{ node } in filterTechnologies"
            :key="node.id"
            class="work__technologies-item"
            :href="node.link"
            target="_blank"
          >
            <g-image
              :src="$imagePath('technologies', node.path, node.img)"
              :alt="node.title"
              class="work__technologies-logo"
            />
            <p>{{ node.title }}</p>
          </a>
        </figcaption>
      </figure>
    </div>
  </article>
</template>

<static-query>
{
  allTechnologies {
    edges {
      node {
        id
        title
        img
        link
        path
      }
    }
  }
}
</static-query>

<script>
import { markedToHtml } from '@/utils/sanitizeSections'
import Button from '@/components/Base/Button'
export default {
  name: 'Work',
  props: {
    title: String,
    categories: Array,
    img: Object,
    description: String,
    joinClass: String,
    link: String,
    technologies: Array
  },
  components: {
    Button
  },
  computed: {
    descToHtml() {
      return markedToHtml(this.description)
    },
    filterTechnologies() {
      return this.$static.allTechnologies.edges.filter((edge) =>
        this.technologies.some((technology) => technology.link === edge.node.id)
      )
    }
  }
}
</script>
