<template>
  <div class="skeleton-loader" :style="styles"></div>
</template>

<script>
export default {
  name: 'SkeletonLoader',
  props: {
    width: String,
    height: String,
    border: String,
    color: String,
    between: String
  },
  computed: {
    styles() {
      return {
        width: this.width,
        height: this.height,
        border: this.border,
        backgroundColor: this.color,
        '--between': this.between
      }
    }
  }
}
</script>

<style lang="scss">
.skeleton-loader + .skeleton-loader {
  margin-top: var(--between);
}
.skeleton-loader {
  position: relative;
  overflow: hidden;
  cursor: wait;
  width: fit-content;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    animation: wave 1.5s linear 0.5s infinite;
  }
}

@keyframes wave {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
