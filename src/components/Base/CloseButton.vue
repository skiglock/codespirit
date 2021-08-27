<template>
  <button type="button" class="close-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="close-button__icon"
      role="presentation"
      focusable="false"
    >
      <path
        class="close-button__cross"
        d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"
      ></path>
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
  border: 2px solid #252525;
  color: #fff;
  width: 30px;
  height: 30px;
  transition: all 0.2s linear;
  border-radius: 50%;

  &:hover {
    background-color: #252525;
    .close-button__cross {
      fill: #f5f5f5;
    }
  }
  &__icon {
    padding-top: 2px;
    width: 24px;
    height: 24px;
  }
}
</style>
