<template>
  <Layout :title="$page.portfolioCase.title">
    <div class="portfolio-case">
      <div class="portfolio-case__left">
        <div class="mobile">
          <div class="mobile__display">
            <g-image
              :src="
                $imagePath(
                  'portfolio',
                  $page.portfolioCase.path,
                  $page.portfolioCase.img
                )
              "
            />
          </div>
        </div>
      </div>
      <div class="portfolio-case__right">
        <ul class="portfolio-case__categories">
          <li
            class="portfolio-case__category"
            v-for="category in $page.portfolioCase.categories"
            :key="category.id"
          >
            #{{ category.id }}
          </li>
        </ul>

        <div v-html="descToHtml"></div>
        <div class="technologies">
          <div
            class="technologies__item"
            v-for="{ node } in filterTechnologies"
            :key="node.id"
          >
            <g-image
              class="technologies__img"
              :src="$imagePath('technologies', node.path, node.img)"
              :alt="node.title"
            />
            <h4 class="technologies__title">
              <a class="technologies__link" :href="node.link" target="_blank">{{
                node.title
              }}</a>
            </h4>
          </div>
        </div>
        <ul class="done">
          <li class="done__item">Спроектировали дизайн</li>
          <li class="done__item">Адаптивный дизайн для всех устройств</li>
          <li class="done__item">SEO оптимизация</li>
          <li class="done__item">Google PageSpeed 100/100</li>
        </ul>
      </div>
    </div>
    <g-image
      :style="{
        justifySelf: 'center',
        borderRadius: '10px',
        width: '100%',
        marginTop: '5%'
      }"
      :src="
        $imagePath(
          'portfolio',
          $page.portfolioCase.path,
          $page.portfolioCase.img
        )
      "
    />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  portfolioCase(id: $id) {
    title
    img
    path
    description
    technologies {
      id
      link
    }
    categories {
      id
    }
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
import { markedToHtml } from '@/utils/sanitizeSections'
export default {
  metaInfo() {
    return {
      title: this.$page.portfolioCase.title
    }
  },
  computed: {
    descToHtml() {
      return markedToHtml(this.$page.portfolioCase.description)
    },
    filterTechnologies() {
      return this.$page.allTechnologies.edges.filter((edge) =>
        this.$page.portfolioCase.technologies.some(
          (technology) => technology.link === edge.node.id
        )
      )
    }
  },
  mounted() {
    console.log(this.filterTechnologies)
  }
}
</script>

<style lang="scss">
.portfolio-case {
  display: grid;
  @media screen and (min-width: $tablet-width) {
    grid-template-columns: 1fr 1.4fr;
  }
  gap: 30px;
  &__left {
    justify-self: center;
  }
  &__right {
    margin: auto 0;
    display: grid;
    row-gap: 20px;
    grid-template-rows: min-content 0.5fr min-content min-content;
  }
  &__categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
    list-style-type: none;
  }
  &__category {
    justify-self: center;
    align-self: center;
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
  }
}
.technologies {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  &__item {
    display: grid;
    row-gap: 10px;
    justify-items: center;
  }
  &__img {
    width: 60px;
    height: 60px;
  }
  &__title {
    cursor: pointer;
    justify-self: center;
  }
  &__link {
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
    text-decoration: none;
    color: #252525;
  }
}
.mobile {
  position: relative;
  display: block;

  width: 280px;
  border: 1px solid #252525;
  padding: 10px;
  height: 577px;
  border-radius: 45px;
  background: transparent;
  &::before,
  &::after {
    content: '';
    display: block;
    z-index: 10;
    position: absolute;
    background-color: transparent;
    border: 1px solid #252525;
    transform: translate(-50%, -50%);
  }
  &::before {
    top: 35px;
    left: 50%;
    border-radius: 20px;
    width: 60px;
    height: 5px;
  }
  &::after {
    bottom: -15px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    right: 50%;
    left: 50%;
  }
  &__display {
    display: block;
    height: calc(100% - 140px);
    width: calc(100% - 15px * 2);
    position: absolute;
    left: 15px;
    top: 70px;
    img {
      height: 100%;
    }
  }
}
.done {
  display: grid;
  row-gap: 15px;
  &__item {
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
    position: relative;
    padding-left: 40px;
    list-style-type: none;
    &::before {
      content: url('../assets/img/ok.svg');
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
