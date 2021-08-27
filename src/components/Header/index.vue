<template>
  <header class="header">
    <div class="header__wrapper">
      <g-link to="/" class="header__logo">
        <g-image
          :src="
            require(`!!assets-loader!../../../static/${getLogotype.substr(1)}`)
          "
          alt="Codespirit"
        />
      </g-link>
      <header-nav />
      <Button
        @click.native="setModalSettings"
        color="primary"
        size="medium"
        class="header__button"
        type="button"
      >
        Связаться
      </Button>
    </div>
  </header>
</template>

<script>
import HeaderNav from './HeaderNav'
import Button from '@/components/Base/Button'
import { mapMutations } from 'vuex'

export default {
  name: 'Header',
  components: {
    HeaderNav,
    Button
  },
  computed: {
    getLogotype() {
      return this.$store.state.settings.appSettings.img
    }
  },
  methods: {
    ...mapMutations('modal', ['setModalTitle', 'setModalIsOpen']),
    setModalSettings() {
      this.setModalTitle('Связаться с командой Codespirit')
      this.setModalIsOpen(true)
    }
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
    display: flex;
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
