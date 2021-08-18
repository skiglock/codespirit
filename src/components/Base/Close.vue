<template>
  <button type="button" class="close"></button>
</template>

<script>
export default {
  name: 'Close'
}
</script>

<style lang="scss">
.close {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  z-index: 40;
  outline: none;
  border: none;
  background-color: transparent;
  &::before {
    content: '+';
    color: #000;
    position: absolute;
    z-index: 2;
    transform: rotate(45deg);
    font-size: 50px;
    line-height: 1;
    top: -10px;
    left: 0;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: #000;
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
    transform: scale(0.01);
  }
  &:hover:after {
    transform: scale(1);
  }
  &:hover:before {
    transform: scale(0.6) rotate(45deg);
    color: #fff;
  }
}
</style>
