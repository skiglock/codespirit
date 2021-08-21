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
    <!-- Sidebar Without Vuex -->
    <div class="blur" v-if="navOpened" @click="navOpened = false"></div>
    <transition name="transform">
      <header-nav-sidebar
        v-if="navOpened"
        :links="filterMenu"
        @close="navOpened = false"
        @close-click="navOpened = false"
      />
    </transition>
    <!-- Sidebar Without Vuex -->
    <ul class="nav__list">
      <li
        class="nav__item"
        itemprop="name"
        v-for="menu in filterMenu"
        :key="menu.id"
      >
        <g-link class="nav__link" :to="menu.path" itemprop="url">{{
          menu.title
        }}</g-link>
      </li>
    </ul>
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
import HeaderNavSidebar from './HeaderNavSidebar'

export default {
  components: { HeaderNavSidebar },
  name: 'HeaderNav',
  data() {
    return {
      navOpened: false
    }
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
  }
}
</script>

<style lang="scss">
.transform-enter-active,
.transform-leave-active {
  transform: translateX(0%);
  transition: transform 0.3s;
}
.transform-enter,
.transform-leave-to {
  transform: translateX(100%);
}
.blur {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(#252525, 0.3);
  backdrop-filter: blur(5px);
  z-index: 30;
}
.nav {
  position: relative;
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
  }
  &__link {
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
    &--active {
      color: var(--main_color_hover);
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
