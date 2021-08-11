<template>
  <div class="wrapper">
    <h1>App</h1>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100%;
}
</style>
