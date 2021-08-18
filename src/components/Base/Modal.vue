<template>
  <transition name="fade">
    <div class="modal">
      <div class="modal__dialog">
        <Close @click.native="$emit('close')" class="modal__close" />
        <h2 class="modal__title">{{ getModalTitle }}</h2>
        <Form textarea title="Модальное окно" />
      </div>
    </div>
  </transition>
</template>

<script>
import Close from '@/components/Base/Close'
import Form from '@/components/Base/Form'
import { mapGetters } from 'vuex'

export default {
  name: 'Modal',
  components: {
    Close,
    Form
  },
  computed: {
    ...mapGetters('modal', ['getModalTitle'])
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.modal {
  display: grid;
  justify-items: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(#252525, 0.3);
  backdrop-filter: blur(5px);
  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  &__dialog {
    position: relative;
    display: grid;
    row-gap: 30px;
    padding-top: 40px;
    padding-left: 30px;
    padding-right: 30px;
    box-shadow: 0px 2px 3.76px 0.24px rgba(#252525, 0.35);
    background-color: #fff;
    border-radius: 20px;
    @media screen and (min-width: $tablet-width) {
      padding-left: 40px;
      padding-right: 40px;
      width: 500px;
    }
  }
  &__title {
    text-align: center;
    color: #252525;
    font-size: 18px;
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
  }
}
</style>
