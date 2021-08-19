<template>
  <button type="button" class="close-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="32px"
      height="32px"
      class="close-button__icon"
      role="presentation"
      focusable="false"
    >
      <path
        fill="none"
        class="close-button__circle"
        stroke-miterlimit="10"
        d="m 8.0605096,2.0605096 a 6.0000001,6.0000001 0 1 0 0,12.0000004 6.0000001,6.0000001 0 1 0 0,-12.0000004 z"
        stroke-width="0.8"
      />
      <path
        fill="none"
        class="close-button__mark"
        stroke-linecap="square"
        stroke-miterlimit="10"
        d="M 10.06051,6.0605096 6.0605096,10.06051 m 4.0000004,0 -4.0000004,-4.0000004"
        stroke-width="0.8"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'CloseButton'
}
</script>

<style lang="scss">
.close-button {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  &:hover {
    .close-button__circle {
      fill: #000;
    }
    .close-button__mark {
      stroke: #fff;
    }
  }
  &__icon {
  }
  &__circle {
    stroke: #000000;
  }
  &__mark {
    stroke: #000000;
  }
}
</style>
