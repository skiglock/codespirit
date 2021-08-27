<template>
  <section class="content">
    <div class="content__wrapper">
      <header class="content__header">
        <h1 class="content__title">{{ title }}</h1>
      </header>
      <div class="content__body">
        <slot />
      </div>
      <back-button v-if="$route.path !== '/'" class="content__back-button" />
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
import BackButton from '@/components/Base/BackButton'
export default {
  props: {
    title: String
  },
  components: {
    BackButton
  }
}
</script>

<style lang="scss">
.content {
  padding-bottom: 40px;
  &__wrapper {
    position: relative;
    border-radius: 20px;
    background-color: var(--content_color);
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
    gap: 3em;
    @media screen and (min-width: $tablet-width) {
      gap: 2em;
    }
  }
  &__title {
    font-family: 'OksFree', sans-serif;
    font-weight: 100;
    font-size: 25px;
    color: #fff;
    border-radius: 30px;
    @include background-with-shadow(var(--main_color));
    padding-top: 3px;
    padding-left: 37px;
    padding-right: 13px;
    padding-bottom: 13px;
    @media screen and (min-width: $mobile-width) {
      font-size: 28px;
    }
    @media screen and (min-width: $tablet-width) {
      font-size: 35px;
    }
    @media screen and (min-width: $desktop-width) {
      font-size: 40px;
      letter-spacing: 1.3px;
      padding-left: 60px;
    }
  }
  &__back-button {
    justify-self: start;
    margin-top: 5%;
  }
}
</style>
