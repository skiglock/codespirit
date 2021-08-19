<template>
  <div class="wrapper" :style="appCssVars">
    <Header />
    <main class="main">
      <router-view />
    </main>
    <Footer />
    <Modal v-show="getModalIsOpen" @close="resetModalSettings" />
  </div>
</template>

<script>
import appSettings from '@/data/main_settings.yaml'
import menuSettings from '@/data/menu_settings.yaml'
import documentsSettings from '@/data/documents_settings.yaml'
import hexToRGB from '@/utils/hexToRGB'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Modal from '@/components/Base/Modal'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    Header,
    Footer,
    Modal
  },
  methods: {
    ...mapMutations('modal', ['resetModalSettings']),
    ...mapMutations('settings', [
      'setAppSettings',
      'setMenuSettings',
      'setDocumentsSettings'
    ])
  },
  computed: {
    ...mapGetters('modal', ['getModalIsOpen']),
    appSettings() {
      return appSettings
    },
    menuSettings() {
      return menuSettings
    },
    documentsSettings() {
      return documentsSettings
    },
    appCssVars() {
      return {
        '--main_color': this.appSettings.main_color,
        '--main_color_hover': hexToRGB(this.appSettings.main_color, 0.8),
        '--background_color': this.appSettings.background_color,
        '--content_color': this.appSettings.content_color,
        '--footer_color': this.appSettings.footer_color
      }
    }
  },
  created() {
    this.setAppSettings(this.appSettings)
    this.setMenuSettings(this.menuSettings)
    this.setDocumentsSettings(this.documentsSettings)
  }
}
</script>

<style lang="scss">
.wrapper {
  background-color: var(--background_color);
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100%;
}
</style>
