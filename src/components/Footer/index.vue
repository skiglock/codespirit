<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__promo">
        <h2 class="footer__title">Ждем вас! &#128150;</h2>
        <Button
          @click.native="setModalSettings('Ваша идея, наше воплощение!')"
          color="primary"
          size="large"
          class="footer__button"
          type="button"
        >
          Оставить заявку
        </Button>
      </div>
      <div class="footer__info">
        <div class="footer__contacts">
          <a
            class="footer__contacts-item"
            :href="`tel:${getAppSettings.number}`"
          >
            {{ getAppSettings.number }}
          </a>
          <a
            class="footer__contacts-item"
            :href="`mailto:${getAppSettings.mail}`"
          >
            {{ getAppSettings.mail }}
          </a>
        </div>
        <div class="footer__social">
          <a
            class="footer__social-item"
            :href="social.link"
            v-for="social in getAppSettings.socials"
            :key="social.id"
            target="_blank"
          >
            {{ social.title }}
          </a>
        </div>
      </div>
      <div
        class="footer__menu"
        role="navigation"
        aria-label="Нижнее меню"
        itemscope
        itemtype="http://www.schema.org/SiteNavigationElement"
      >
        <ul class="footer__list">
          <li itemprop="name" v-for="menu in filterMenu" :key="menu.id">
            <g-link :to="menu.path" itemprop="url">{{ menu.title }}</g-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom" role="contentinfo">
      <a>© 2021 CODESPIRIT. Все права защищены</a>
      <g-link
        v-for="{ node } in filterDocuments"
        :key="node.id"
        :to="node.path"
      >
        {{ node.title }}
      </g-link>
    </div>
  </footer>
</template>
<static-query>
{
  allPages {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</static-query>
<script>
import { mapGetters, mapMutations } from 'vuex'
import Button from '@/components/Base/Button'
export default {
  name: 'Footer',
  components: {
    Button
  },
  methods: {
    ...mapMutations('modal', ['setModalSettings'])
  },
  computed: {
    ...mapGetters('settings', [
      'getAppSettings',
      'getMenuSettings',
      'getDocumentsSettings'
    ]),
    filterDocuments() {
      return this.$static.allPages.edges.filter((edge) =>
        this.getDocumentsSettings.docs.some((doc) => edge.node.id === doc.link)
      )
    },
    getMainPageLink() {
      return this.getAppSettings.link
    },
    findMenuPages() {
      return this.$static.allPages.edges.filter((edge) =>
        this.getMenuSettings.menu.some((menu) => edge.node.id === menu.link)
      )
    },
    filterMenu() {
      const newMenuArray = this.findMenuPages
        .map((menu) => {
          return {
            id: menu.node.id,
            path: menu.node.id === this.getMainPageLink ? '/' : menu.node.path,
            title:
              menu.node.id === this.getMainPageLink
                ? 'Главная'
                : menu.node.title
          }
        })
        .reverse()
      return [
        ...newMenuArray,
        { id: Math.random(100, 21), path: '/portfolio', title: 'Наши работы' }
      ]
    }
  }
}
</script>

<style lang="scss">
.footer {
  background-color: var(--footer_color);
  padding-top: 25px;
  padding-bottom: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media screen and (min-width: $tablet-width) {
    padding-top: 35px;
  }
  &__wrapper {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 30px;
    row-gap: 20px;
    justify-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  &__promo {
    @media screen and (max-width: 699px) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
  &__title {
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
    text-align: center;
  }
  &__button {
    margin-top: 10px;
  }
  &__info {
    text-align: center;
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 5px;
  }
  &__contacts {
    display: grid;
    row-gap: 5px;
    &-item {
      font-size: 18px;
      color: #171717;
      text-decoration: none;
      transition: 0.1s linear;
      &:hover {
        color: var(--main_color_hover);
      }
    }
  }
  &__social {
    align-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    &-item {
      font-size: 18px;
      color: #171717;
      text-decoration: none;
      transition: 0.1s linear;
      &:hover {
        color: var(--main_color_hover);
      }
    }
  }
  &__menu {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  &__list {
    list-style: none;
    display: grid;
    row-gap: 8px;
    a {
      font-size: 18px;
      color: #171717;
      text-decoration: none;
      transition: 0.1s linear;
      &:hover {
        color: var(--main_color_hover);
      }
    }
  }
  &__bottom {
    padding-top: 20px;
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    gap: 10px;
    text-align: center;
    a {
      color: #171717;
      text-decoration: none;
      font-size: 14px;
      &:not(:first-child):hover {
        color: var(--main_color_hover);
      }
    }
  }
}
</style>
