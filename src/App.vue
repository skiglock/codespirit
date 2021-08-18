<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <router-view />
    </main>
    <Footer />
    <Modal v-show="getModalIsOpen" @close="setModalSettings" />
  </div>
</template>

<script>
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
    ...mapMutations('modal', ['setModalTitle', 'setModalIsOpen']),
    setModalSettings() {
      this.setModalTitle('')
      this.setModalIsOpen(false)
    }
  },
  computed: {
    ...mapGetters('modal', ['getModalIsOpen'])
  }
}
</script>

<style lang="scss">
.wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100%;
}
</style>
