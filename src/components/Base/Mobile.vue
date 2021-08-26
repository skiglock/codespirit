<template>
  <div class="mobile">
    <div class="mobile__display">
      <div
        class="mobile__slides"
        :style="{
          transitionDuration: transition + 'ms',
          transform: `translate3d(${transform}px, 0px, 0px)`
        }"
      >
        <g-image
          v-for="(image, index) in images"
          :key="image.id"
          class="mobile__slide"
          :class="index + 1 === active ? 'mobile__slide--active' : ''"
          :src="$imagePath('portfolio', path, image.img)"
          :alt="image.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
const MOBILE_WIDTH = 228
const TRANSITION_DURATION = 300
const NEXT_SLIDE_TIME = 5000
export default {
  name: 'Mobile',
  props: {
    path: String,
    images: Array
  },
  data() {
    return {
      active: 1,
      timer: 0,
      transition: 0,
      transform: 0
    }
  },

  methods: {
    move(amount) {
      let newActive
      const newIndex = this.active + amount
      if (newIndex > this.images.length) newActive = 1
      if (newIndex === 0) newActive = this.images.length
      this.active = newActive || newIndex
    },
    resetPlay() {
      clearInterval(this.timer)
      this.play()
    },
    play() {
      const app = this
      this.timer = setInterval(() => {
        app.nextSlide()
      }, NEXT_SLIDE_TIME)
    },
    nextSlide() {
      this.transition = TRANSITION_DURATION
      this.transform -= MOBILE_WIDTH
      setTimeout(() => {
        this.transition = 0
      }, TRANSITION_DURATION)
      this.active++
      if (this.active >= this.images.length + 1) {
        this.active = 1
        this.transform = 0
      }
      this.resetPlay()
    }
  },
  mounted() {
    this.play()
  }
}
</script>

<style lang="scss">
.mobile {
  position: relative;
  display: block;
  width: 260px;
  height: 535px;
  border: 1px solid #989898;
  border-radius: 35px;
  background: transparent;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    background-color: transparent;
    border: 1px solid #989898;
    transform: translate(-50%, -50%);
  }
  &::before {
    top: 35px;
    left: 50%;
    border-radius: 20px;
    width: 60px;
    height: 5px;
  }
  &::after {
    bottom: -15px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    right: 50%;
    left: 50%;
  }
  &__display {
    border: 1px solid #989898;
    overflow: hidden;
    display: block;
    height: calc(100% - 140px);
    width: calc(100% - 15px * 2);
    position: absolute;
    z-index: 5;
    left: 15px;
    top: 70px;
    img {
      height: 100%;
    }
  }
  &__slides {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  &__slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    width: 100%;

    &--active {
    }
  }
}
</style>
