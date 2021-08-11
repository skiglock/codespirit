<template>
  <Layout :title="mainPage.title">
    <components
      :is="section.type"
      v-for="section in mainPage.sections"
      :key="section.id"
      :content="section"
      :path="mainPage.path"
    />
  </Layout>
</template>

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
  color
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
}

fragment ourPortfolio on Sections {
  id
  type
  title
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
  },
  mounted() {
    console.log(this.mainPage.sections)
  }
}
</script>
