<template>
  <section class="content">
    <div class="content__wrapper">
      <header class="content__header">
        <h1
          v-if="skeleton.isLoading"
          :style="{ paddingTop: '7px', paddingBottom: '7px' }"
          class="content__title"
        >
          <skeleton class="content__title" :width="150" :height="30"></skeleton>
        </h1>

        <h1 v-else class="content__title">{{ title }}</h1>
      </header>
      <div class="content__body">
        <slot />
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  inject: ['skeleton'],
  props: {
    title: String
  }
}
</script>

<style lang="scss">
.content {
  padding-bottom: 40px;
  &__wrapper {
    min-height: 320px;
    border-radius: 20px;
    background-color: #fff;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 33px;
    @media screen and (min-width: $tablet-width) {
      max-width: 900px;
      margin: 0 auto;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 25px;
    }
    @media screen and (min-width: $desktop-width) {
      border-radius: 30px;
      padding-left: 30px;
      padding-right: 30px;
    }
  }
  &__header {
    display: grid;
    padding-top: 14px;
    padding-bottom: 40px;
    justify-content: center;
    @media screen and (min-width: $mobile-width) {
      padding-bottom: 20px;
      justify-content: end;
    }
  }
  &__body {
    display: grid;
    gap: 2em;
    @media screen and (min-width: $mobile-width) {
      gap: 3em;
    }
    @media screen and (min-width: $tablet-width) {
      gap: 4em;
    }
  }
  &__title {
    font-family: 'OksFree', sans-serif;
    font-weight: 100;
    font-size: 30px;
    color: #fff;
    border-radius: 30px;
    @include background-with-shadow($red_color);
    padding-top: 3px;
    padding-left: 37px;
    padding-right: 13px;
    padding-bottom: 13px;
    @media screen and (min-width: $tablet-width) {
      font-size: 35px;
    }
    @media screen and (min-width: $desktop-width) {
      font-size: 40px;
      letter-spacing: 1.3px;
      padding-left: 60px;
    }
  }
}
</style>
