<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  provide() {
    const skeleton = {}
    Object.defineProperty(skeleton, 'isLoading', {
      enumerable: true,
      get: () => this.isLoading
    })
    return { skeleton }
  },
  data() {
    return {
      isLoading: false
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    setLoading() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1500)
    }
  },
  mounted() {
    this.setLoading()
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
