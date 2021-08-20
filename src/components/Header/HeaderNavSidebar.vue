<template>
  <div class="sidebar" role="navigation">
    <close-button
      @click.native="$emit('close')"
      class="sidebar__close"
      aria-label="Закрыть меню"
    />
    <div class="sidebar__list">
      <g-link
        @click.native="$emit('close-click')"
        v-for="link in links"
        :key="link.id"
        :to="link.path"
      >
        {{ link.title }}
      </g-link>
    </div>
  </div>
</template>

<script>
import CloseButton from '@/components/Base/CloseButton'
export default {
  name: 'HeaderNavSidebar',
  props: {
    links: Array
  },
  components: {
    CloseButton
  }
}
</script>

<style lang="scss">
.sidebar {
  @media screen and (min-width: $mobile-width) {
    display: none;
  }
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 200px;
  z-index: 31;
  background-color: #f5f5f5;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 60px 20px 10px 35px;
  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  &__list {
    display: grid;
    gap: 10px;
    a {
      font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
      text-decoration: none;
      color: #252525;
      transition: 0.1s linear;
      &:hover {
        color: var(--main_color_hover);
      }
    }
  }
}
</style>
