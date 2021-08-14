<template>
  <div
    class="banner-logo"
    :style="{ backgroundColor: '#e5e5e5', boxShadow: 'none' }"
  >
    <div class="banner-logo__header">
      <h1
        class="banner-logo__title"
        :style="{ backgroundColor: 'transparent', boxShadow: 'none' }"
      >
        <skeleton-loader width="150px" color="gray" />
      </h1>
    </div>
    <div class="banner-logo__bottom">
      <skeleton-loader
        class="banner-logo__subtitle"
        width="40%"
        color="gray"
        :style="{ marginLeft: '2%', marginBottom: '5px' }"
      />
      <skeleton-loader
        class="banner-logo__description"
        color="gray"
        :style="{
          backgroundColor: 'rgba(0,0,0, 0.1)'
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerLogoLoading'
}
</script>

<style lang="scss">
@import './BannerLogo.scss';
.banner-logo {
  &::before {
    display: none;
  }
}
</style>
