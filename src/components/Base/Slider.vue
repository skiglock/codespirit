<template>
  <ul class="slides">
    <li v-for="(image, index) in images" :key="image.id" class="slides__item">
      <transition name="slide-fade">
        <g-image
          class="slides__img"
          v-if="index + 1 === active"
          :src="$imagePath('portfolio', path, image.img)"
          :alt="image.title"
        />
      </transition>
    </li>
  </ul>
  <!-- <button @click="move(-1)">prev</button>
    <button @click="move(1)">next</button> -->
</template>

<script>
export default {
  name: 'Slider',
  props: {
    path: String,
    images: Array
  },
  data() {
    return {
      active: 1,
      timer: 0
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
      }, 5000)
    },
    nextSlide() {
      this.active++
      if (this.active >= this.images.length) this.active = 1
      this.resetPlay()
    }
  },
  mounted() {
    this.play()
  }
}
</script>

<style lang="scss">
.slides {
  list-style-type: none;
  &__item {
  }
  &__img {
    position: absolute;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
