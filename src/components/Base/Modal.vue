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
          <img src="@/assets/img/rocket.gif" />{{ getModalTitle }}
        </h2>
        <Form textarea title="Модальное окно" />
      </div>
    </div>
  </transition>
</template>

<script>
import CloseButton from '@/components/Base/CloseButton'
import Form from '@/components/Base/Form'
import { mapGetters } from 'vuex'

export default {
  name: 'Modal',
  components: {
    CloseButton,
    Form
  },
  computed: {
    ...mapGetters('modal', ['getModalTitle', 'getModalIsOpen'])
  }
}
</script>

<style lang="scss">
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
    top: 18px;
    right: 23px;
  }
  &__dialog {
    position: relative;
    display: grid;
    row-gap: 30px;
    padding-top: 40px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 10px;
    box-shadow: 0px 2px 3.76px 0.24px rgba(#252525, 0.35);
    background-color: #ffeab3;
    border-radius: 20px;
    width: auto;
    margin: 0 10px;
    @media screen and (min-width: $tablet-width) {
      padding-left: 40px;
      padding-right: 40px;
      width: 500px;
    }
  }
  &__title {
    display: grid;
    grid-auto-flow: column;
    text-align: left;
    align-items: center;
    color: #252525;
    font-size: 18px;
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
    img {
      justify-self: center;
      width: 20px;
    }
  }
}
</style>
