<template>
  <nav
    class="nav"
    :class="navOpened ? 'nav--opened' : ''"
    aria-label="Основное меню"
    itemscope
    itemtype="http://www.schema.org/SiteNavigationElement"
  >
    <button @click="navOpened = !navOpened" class="nav__burger" type="button">
      Открыть меню
    </button>
    <div class="nav__wrapper">
      <ul class="nav__list">
        <li class="nav__item" itemprop="name">
          <a href="#" itemprop="url">Что мы делаем?</a>
        </li>
        <li class="nav__item" itemprop="name">
          <a href="#" itemprop="url">О студии</a>
        </li>
        <li class="nav__item" itemprop="name">
          <a href="#" itemprop="url">Портфолио</a>
        </li>
        <li class="nav__item" itemprop="name">
          <a href="#" itemprop="url">Контакты</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      navOpened: false
    }
  }
}
</script>

<style lang="scss">
.nav {
  position: relative;
  &__wrapper {
    transition: transform 0.5s ease;
  }
  &--opened {
    .nav__wrapper {
      width: 200px;
      position: fixed;
      top: 0;
      right: 0;
      left: 100%;
      bottom: 0;
      background-color: #f7f7f7;
      height: 100%;
      z-index: 30;
      padding-top: 60px;
      padding-right: 20px;
      padding-bottom: 10px;
      padding-left: 35px;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      transform: translateX(-100%);
      transition: transform 0.5s ease;
      @media screen and (min-width: $small-mobile-width) {
        width: 230px;
      }
      @media screen and (min-width: $mobile-width) {
        width: auto;
        transform: inherit;
        position: sticky;
        padding: 0;
        border: 0;
        background-color: inherit;
      }
    }
    .nav__list {
      list-style-type: none;
      display: block;
      .nav__item + .nav__item {
        margin-top: 15px;
      }
      @media screen and (min-width: $mobile-width) {
        display: grid;
        .nav__item + .nav__item {
          margin: 0;
        }
      }
    }
    .nav__burger {
      animation: fadeIn 0.5s;
      display: block;
      z-index: 31;
      position: absolute;
      width: 25px;
      height: 25px;
      top: -10px;
      left: -20px;
      right: 0;
      bottom: 0;
      border: 1px solid #252525;
      border-radius: 50%;
      // &:hover {
      //   border: 1px solid #f7f7f7;
      //   background-color: #252525;
      //   &::before,
      //   &::after {
      //     background-color: #fff;
      //   }
      // }
      &::before {
        box-shadow: none;
        transform: rotate(45deg);
        height: 1px;
        width: 15px;
        top: 11px;
        left: 4px;
      }
      &::after {
        width: 15px;
        border-radius: 10px;
        position: absolute;
        content: '';
        height: 1px;
        background-color: #252525;
        top: 11px;
        left: 4px;
        right: 0;
        transform: rotate(-45deg);
      }
      @media screen and (min-width: $mobile-width) {
        display: none;
      }
    }
  }
  &__list {
    display: none;
    @media screen and (min-width: $mobile-width) {
      list-style-type: none;
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
        color: $red_color;
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
    z-index: 1;
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
