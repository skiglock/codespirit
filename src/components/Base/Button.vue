<template>
  <component
    :is="buttonType"
    :to="href"
    class="button"
    :class="[
      buttonColor,
      buttonSize,
      buttonType === 'g-link' ? 'button--link' : '',
      icon ? 'button--icon' : ''
    ]"
  >
    <g-image v-if="icon" :src="icon" /> <slot />
  </component>
</template>

<script>
const colors = {
  primary: 'button--primary',
  white: 'button--white',
  yellow: 'button--yellow'
}
const sizes = {
  small: 'button--small',
  medium: 'button--medium',
  large: 'button--large'
}
export default {
  name: 'Button',
  props: {
    href: String,
    color: {
      validator: (value) => {
        return colors[value]
      }
    },
    size: {
      validator: (value) => {
        return sizes[value]
      }
    },
    icon: Object
  },
  computed: {
    buttonType() {
      return this.href ? 'g-link' : 'button'
    },
    buttonColor() {
      return colors[this.color]
    },
    buttonSize() {
      return sizes[this.size]
    }
  }
}
</script>

<style lang="scss">
.button {
  font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  transition: 0.1s linear;
  box-shadow: 1px 1.5px 0px rgba(#252525, 0.6);
  &:active {
    box-shadow: 0.66px 1.06px 0px rgba(#252525, 0.6);
  }
  &--link {
    text-decoration: none;
    text-align: center;
  }
  &--icon {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 8px;
      width: 16px;
    }
  }
  &--primary {
    background-color: var(--main_color);
    color: #fff;
    font-weight: 100;
    &:hover {
      background-color: var(--main_color_hover);
    }
    @media screen and (min-width: $desktop-width) {
      font-size: 18px;
    }
  }
  &--white {
    background-color: #fff;
    color: #313131;
    &:hover {
      background-color: rgb(238, 237, 237);
    }
  }
  &--yellow {
    background-color: #ffcb86;
    &:hover {
      background-color: rgba(#ffcb86, 0.8);
    }
  }
  &--small {
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;
  }
  &--medium {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 17px;
    padding-left: 20px;
    padding-right: 20px;
  }
  &--large {
    font-size: 16px;
    padding: 6px 15px;
    @media screen and (min-width: $tablet-width) {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 25px;
      padding-right: 25px;
    }
  }
}
</style>
