<template>
  <transition name="fade">
    <div class="modal">
      <div class="modal__dialog">
        <close-button
          @click.native="$emit('close')"
          class="modal__close"
          aria-label="Закрыть модальное окно"
        />
        <h2 class="modal__title">
          {{ getModalTitle }}
        </h2>
        <Form textarea title="Модальное окно" />
      </div>
    </div>
  </transition>
</template>

<script>
import CloseButton from '@/components/Base/CloseButton'
import Form from '@/components/Base/Form'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Modal',
  components: {
    CloseButton,
    Form
  },
  computed: {
    ...mapGetters('modal', ['getModalTitle', 'getModalIsOpen'])
  },
  methods: {
    ...mapMutations('modal', ['setModalIsOpen']),
    keyEventListener(e) {
      if (e.key === 'Escape') {
        this.setModalIsOpen(false)
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyEventListener)
  },
  destroyed() {
    window.removeEventListener('keydown', this.keyEventListener)
  }
}
</script>

<style lang="scss">
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(#252525, 0.3);
  backdrop-filter: blur(5px);
  z-index: 31;
  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  &__dialog {
    position: relative;
    display: grid;
    row-gap: 15px;
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    box-shadow: 0px 2px 3.76px 0.24px rgba(#252525, 0.35);
    background-color: #ffeab3;
    border-radius: 20px;
    width: auto;
    margin: 0 10px;
    @media screen and (min-width: $mobile-width) {
      padding-left: 40px;
      padding-right: 40px;
      width: 500px;
    }
  }
  &__title {
    // -webkit-text-stroke: 1.3px #2b2b2b;
    text-align: center;
    color: #2b2b2b;
    font-size: 18px;
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
    @media screen and (min-width: $tablet-width) {
      font-size: 21px;
    }
  }
}
</style>
