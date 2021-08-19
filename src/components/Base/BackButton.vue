<template>
  <button type="button" class="back-button" aria-label="Вернуться назад">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="21px"
      height="21px"
      viewBox="0 0 15 15"
      class="back-button__icon"
      role="presentation"
      focusable="false"
      @click="hasHistory() ? $router.go(-1) : $router.push('/')"
    >
      <path
        d="M 11.527344 2.847656 L 5.117188 2.847656 L 5.65625 1.535156 C 5.769531 1.253906 5.6875 0.933594 5.449219 0.746094 C 5.214844 0.558594 4.882812 0.546875 4.632812 0.71875 L 0.292969 3.734375 C 0.105469 3.867188 -0.0078125 4.085938 0 4.316406 C 0.0078125 4.546875 0.132812 4.757812 0.328125 4.878906 L 4.867188 7.632812 C 5.125 7.792969 5.453125 7.761719 5.679688 7.558594 C 5.902344 7.355469 5.96875 7.027344 5.839844 6.753906 L 5.242188 5.492188 L 11.527344 5.492188 C 11.992188 5.492188 12.367188 5.878906 12.367188 6.339844 L 12.367188 10.9375 C 12.367188 11.402344 11.992188 11.769531 11.527344 11.769531 L 4.570312 11.769531 C 3.953125 11.769531 3.449219 12.273438 3.449219 12.894531 L 3.449219 13.292969 C 3.449219 13.914062 3.953125 14.414062 4.570312 14.414062 L 11.527344 14.414062 C 13.449219 14.414062 15.011719 12.859375 15.011719 10.9375 L 15.011719 6.339844 C 15.011719 4.417969 13.449219 2.847656 11.527344 2.847656 Z M 11.527344 2.847656 "
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'BackButton',
  methods: {
    hasHistory() {
      if (typeof window !== 'undefined') {
        return window.history.length > 1
      }
    }
  }
}
</script>

<style lang="scss">
.back-button {
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 1s;
  &:hover {
    .back-button__icon {
      fill: var(--main_color_hover);
    }
    transform: scale(1.2);
  }
  &__icon {
    cursor: pointer;
    stroke: none;
    fill-rule: nonzero;
    fill: var(--main_color);
    fill-opacity: 1;
  }
}
</style>
