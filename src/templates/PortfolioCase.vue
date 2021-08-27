<template>
  <Layout :title="$page.portfolioCase.title">
    <div class="portfolio-case">
      <div class="portfolio-case__left">
        <Mobile
          :images="$page.portfolioCase.gallery_mobile"
          :path="$page.portfolioCase.path"
        />
      </div>
      <div class="portfolio-case__right" ref="right">
        <g-image
          v-animate="'enter'"
          class="portfolio-case__logotype"
          :src="
            $page.portfolioCase.logotype
              ? $imagePath(
                  'portfolio',
                  $page.portfolioCase.path,
                  $page.portfolioCase.logotype
                )
              : ''
          "
        />
        <ul v-animate="'enter'" class="portfolio-case__categories">
          <li
            class="portfolio-case__category"
            v-for="category in $page.portfolioCase.categories"
            :key="category.id"
          >
            #{{ category.id }}
          </li>
        </ul>

        <ul v-animate="'enter'" class="portfolio-case__technologies">
          <li
            class="portfolio-case__technologies-item"
            v-for="{ node } in filterTechnologies"
            :key="node.id"
          >
            <g-image
              class="portfolio-case__technologies-img"
              :src="$imagePath('technologies', node.path, node.img)"
              :alt="node.title"
            />
            <h4 class="portfolio-case__technologies-title">
              <a
                class="portfolio-case__technologies-link"
                :href="node.link"
                target="_blank"
                >{{ node.title }}</a
              >
            </h4>
          </li>
        </ul>

        <ul v-animate="'enter'" class="portfolio-case__done">
          <li
            class="portfolio-case__done-item"
            v-for="done in $page.portfolioCase.done"
            :key="done.id"
          >
            {{ done.title }}
          </li>
        </ul>

        <div
          class="portfolio-case__done-description"
          v-animate="'enter'"
          v-html="descFullToHtml"
        ></div>

        <div class="portfolio-case__images">
          <LightBox
            ref="lightbox"
            :images="remakeDesktopGalleryArray"
            :current-image-name="currentImageName"
          />
          <g-image
            class="portfolio-case__image"
            v-for="image in remakeDesktopGalleryArray"
            :key="image.id"
            :src="$imagePath('portfolio', image.path, image.name)"
            :alt="image.alt"
            @click="showLightbox(image.name)"
          />
        </div>
        <div class="portfolio-case__buttons">
          <Button
            :href="$page.portfolioCase.project_link"
            size="small"
            color="primary"
            target="_blank"
          >
            Перейти на сайт проекта
          </Button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  portfolioCase(id: $id) {
    title
    img
    logotype
    path
    description
    description_full
    gallery_desktop {
      id
      title
      img
    }
    gallery_mobile {
      id
      title
      img
    }
    done {
      id
      title
    }
    technologies {
      id
      link
    }
    categories {
      id
    }
    project_link
  }
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
</page-query>

<script>
import LightBox from '@/components/Base/LightBox'
import Mobile from '@/components/Base/Mobile'
import Button from '@/components/Base/Button'
import { markedToHtml } from '@/utils/sanitizeSections'
export default {
  metaInfo() {
    return {
      title: `${this.$page.portfolioCase.title} - Портфолио`
    }
  },
  components: {
    LightBox,
    Mobile,
    Button
  },
  data() {
    return {
      currentImageName: ''
    }
  },
  methods: {
    showLightbox(imageName) {
      this.$refs.lightbox.show(imageName)
    }
  },

  computed: {
    remakeDesktopGalleryArray() {
      return this.$page.portfolioCase.gallery_desktop.map((image) => {
        return {
          id: image.id,
          name: image.img,
          alt: image.title,
          path: this.$page.portfolioCase.path
        }
      })
    },
    descToHtml() {
      return markedToHtml(this.$page.portfolioCase.description)
    },
    descFullToHtml() {
      return markedToHtml(this.$page.portfolioCase.description_full)
    },
    filterTechnologies() {
      return this.$page.allTechnologies.edges.filter((edge) =>
        this.$page.portfolioCase.technologies.some(
          (technology) => technology.link === edge.node.id
        )
      )
    }
  }
}
</script>

<style lang="scss">
.portfolio-case {
  display: grid;
  @media screen and (min-width: $tablet-width) {
    grid-template-columns: 1fr 1.4fr;
  }
  gap: 20px;
  &__logotype {
    justify-self: center;
    width: 200px;
    border-radius: 10px;
    max-height: 60px;
  }
  &__left {
    grid-row: 2;
    justify-self: center;
    @media screen and (min-width: $tablet-width) {
      grid-row: 1;
      position: sticky;
      top: 60px;
      justify-self: center;
      align-self: start;
    }
  }
  &__right {
    align-self: center;
    display: grid;
    row-gap: 30px;
    grid-template-rows: min-content 0.5fr min-content min-content;
  }
  &__categories {
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
    gap: 20px;
    list-style-type: none;
  }
  &__category {
    font-size: 14px;
    justify-self: center;
    align-self: center;
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
  }
  &__technologies {
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    display: grid;
    row-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    &-item {
      display: grid;
      row-gap: 5px;
      justify-items: center;
      cursor: pointer;
    }
    &-img {
      width: 40px;
      height: 40px;
    }
    &-title {
      justify-self: center;
    }
    &-link {
      font-size: 14px;
      font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
      text-decoration: none;
      color: #252525;
    }
  }
  &__buttons {
    display: flex;
    justify-content: flex-end;
  }
  &__done {
    display: grid;
    row-gap: 15px;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    &-item {
      font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
      position: relative;
      padding-left: 40px;
      list-style-type: none;
      font-size: 15px;
      &::before {
        content: url('../assets/img/ok.svg');
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
  &__images {
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(236px, 1fr));
    gap: 2px;
  }
  &__image {
    cursor: pointer;
    border-radius: 5px;
    img {
    }
  }
}
</style>
