<template>
  <div class="modal">
    <div class="modal__dialog">
      {{ getModalTitle }}
      <Button @click="$emit('close')">Close</Button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Modal',
  computed: {
    ...mapGetters('modal', ['getModalTitle'])
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
  background-color: rgba(#252525, 0.1);
  backdrop-filter: blur(6px);
  &__dialog {
    box-shadow: 0px 2px 3.76px 0.24px rgba(#252525, 0.35);
    background-color: #fff;
    width: 50%;
    height: 50%;
    border-radius: 30px;
  }
}
</style>
