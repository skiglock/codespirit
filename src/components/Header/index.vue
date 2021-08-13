<template>
  <header class="header">
    <div class="header__wrapper">
      <g-link to="/" class="header__logo">
        <g-image src="@/assets/img/logotype.png" alt="Codespirit" />
      </g-link>
      <header-nav />
      <button
        class="header__button button button--primary button--medium"
        type="button"
      >
        Связаться
      </button>
    </div>
  </header>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
export default {
  name: 'Header',
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss">
.header {
  padding: 16px 0;
  @media screen and (min-width: $tablet-width) {
    padding: 20px 0;
  }
  &__wrapper {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    @media screen and (min-width: $tablet-width) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
  &__logo {
    img {
      width: 100px;
      @media screen and (min-width: $tablet-width) {
        width: 110px;
      }
      @media screen and (min-width: $desktop-width) {
        width: 120px;
      }
    }
  }
  &__button {
    display: none;
    @media screen and (min-width: $tablet-width) {
      display: inline-block;
    }
  }
}
</style>
