<template>
  <Layout title="Ошибка: 404">
    <h1 class="error-page">Возможно вы ошиблись страницей?</h1>
  </Layout>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: 'Ошибка: 404'
    }
  }
}
</script>
<style lang="scss">
.error-page {
  font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
  margin: 10% 0;
  text-align: center;
}
</style>
