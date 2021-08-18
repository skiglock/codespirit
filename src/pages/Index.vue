<template>
  <Layout :title="mainPage.title">
    <component
      v-animate="'enter'"
      v-for="section in getMainPageSections"
      :key="section.id"
      :is="section.type"
      :content="section"
      :path="mainPage.path"
    />
  </Layout>
</template>

<script>
import sanitizeSections from '@/utils/sanitizeSections'
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
    },
    getMainPageSections() {
      return sanitizeSections(this.mainPage.sections)
    }
  }
}
</script>

<style lang="scss">
@keyframes zoom {
  0% {
    transform: translate3d(0, 0, 0) scale(0.8);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

.enter {
  animation-duration: 0.8s;
  animation-fill-mode: both;
  animation-name: zoom;
}
</style>
<static-query>
{
  allPages {
    edges {
      node {
        id
        title
        path
        sections {
          ...bannerLogo
          ...descriptionImage
          ...descriptionSpoilers
          ...hashtagLogo
          ...needed
          ...offer
          ...orderAnother
          ...order
          ...other
          ...ourPortfolio
          ...service
          ...stages
          ...word
        }
      }
    }
  }
}

fragment bannerLogo on Sections {
  id
  type
  img
  title
  color
  subtitle
  description
}

fragment descriptionImage on Sections {
  id
  type
  title
  description
  img
  position
  reverse
}

fragment descriptionSpoilers on Sections {
  id
  type
  title
  description
  spoilers {
    id
    title
    description
  }
}

fragment hashtagLogo on Sections {
  id
  type
  title
  subtitle
  color
}

fragment needed on Sections {
  id
  type
  color
  title
  color_first
  subtitle
  color_second
  items {
    id
    img
    title
  }
}

fragment offer on Sections {
  id
  type
  color
  title
  description
  price
  button {
    title
    color_first
    color_second
  }
}

fragment orderAnother on Sections {
  id
  type
  color
  title
  button {
    title
    color_first
    color_second
  }
}

fragment order on Sections {
  id
  type
  color
  title
  description
  button {
    title
    color_first
    color_second
  }
}

fragment other on Sections {
  id
  type
  title
  color
  link_list {
    id
    link
  }
}

fragment ourPortfolio on Sections {
  id
  type
  title
  link_list {
    id
    link
  }
}

fragment service on Sections {
  id
  type
  title
  img
  description
  color_first
  color_second
  link
  variant
}

fragment stages on Sections {
  id
  type
  title
  img
  color
  spoilers {
    id
    title
    description
  }
}
fragment word on Sections {
  id
  type
  description
}
</static-query>
