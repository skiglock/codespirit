<template>
  <nav
    class="nav"
    aria-label="Основное меню"
    itemscope
    itemtype="http://www.schema.org/SiteNavigationElement"
  >
    <button @click="navOpened = !navOpened" class="nav__burger" type="button">
      Открыть меню
    </button>
    <div
      class="nav__wrapper"
      :class="navOpened ? 'nav__wrapper--opened' : 'nav__wrapper--closed'"
    >
      <close-button
        class="nav__close"
        @click.native="navOpened = false"
        aria-label="Закрыть меню"
      />
      <ul class="nav__list">
        <li
          class="nav__item"
          itemprop="name"
          v-for="menu in filterMenu"
          :key="menu.id"
        >
          <g-link
            @click.native="navOpened = false"
            :to="menu.path"
            itemprop="url"
            >{{ menu.title }}</g-link
          >
        </li>
      </ul>
    </div>
  </nav>
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
import { mapGetters } from 'vuex'

import CloseButton from '@/components/Base/CloseButton'
export default {
  name: 'HeaderNav',
  data() {
    return {
      navOpened: false
    }
  },
  components: {
    CloseButton
  },
  computed: {
    ...mapGetters('settings', ['getAppSettings', 'getMenuSettings']),
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
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.navOpened = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  }
}
</script>

<style lang="scss">
.nav {
  position: relative;
  &__wrapper {
    position: fixed;
    padding-top: 60px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 35px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    background-color: #f7f7f7;
    z-index: 30;
    transition: transform 0.7s;
    .nav__close {
      position: absolute;
      top: 15px;
      right: 15px;
    }
    .nav__list {
      display: block;
      .nav__item + .nav__item {
        margin-top: 15px;
      }
    }
    &--closed {
      transform: translateX(100%);
    }
    &--opened {
      transform: translateX(0);
    }
    @media screen and (min-width: $mobile-width) {
      position: sticky;
      width: auto;
      height: auto;
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      z-index: auto;
      .nav__list {
        display: grid;
        .nav__item + .nav__item {
          margin-top: 0;
        }
      }
      &--closed {
        transform: none;
      }
      .nav__close {
        display: none;
      }
    }
  }
  &__list {
    display: none;
    list-style-type: none;
    @media screen and (min-width: $mobile-width) {
      display: grid;
      grid-auto-flow: column;
      column-gap: 33px;
    }
  }
  &__item {
    a {
      text-decoration: none;
      color: #252525;
      font-size: 16px;
      transition: 0.1s linear;
      &:hover {
        color: var(--main_color_hover);
      }
      @media screen and (min-width: $desktop-width) {
        font-size: 17px;
      }
    }
  }
  &__burger {
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 0;
    background-color: transparent;
    width: 30px;
    height: 30px;
    &::before {
      border-radius: 10px;
      position: absolute;
      content: '';
      height: 4px;
      width: 100%;
      background-color: #252525;
      top: 8px;
      left: 0;
      right: 0;
      box-shadow: 0 8px 0 0 #000;
    }
    @media screen and (min-width: $mobile-width) {
      display: none;
    }
  }
}
</style>
