<template>
  <Layout :title="$page.pages.title">
    <component
      v-animate="'enter'"
      v-for="section in getFlexiblePageSections"
      :key="section.id"
      :is="section.type"
      :content="section"
      :path="$page.pages.path"
    />
  </Layout>
</template>

<script>
import sections from '@/mixins/sections'
import sanitizeSections from '@/utils/sanitizeSections'
export default {
  mixins: [sections],
  computed: {
    getFlexiblePageSections() {
      return sanitizeSections(this.$page.pages.sections)
    }
  },
  metaInfo() {
    return {
      title: this.$page.pages.title
    }
  }
}
</script>

<page-query>
query ($id: ID!) {
  pages(id: $id) {
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
  number
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
</page-query>
