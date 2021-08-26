<template>
  <transition name="lightbox-fade">
    <div
      class="lightbox"
      v-if="visible"
      @mousedown.stop="hide"
      @touchdown.stop="hide"
    >
      <div
        class="lightbox__close"
        @mousedown.stop="hide"
        @touchdown.stop="hide"
      >
        &times;
      </div>
      <div
        class="lightbox__arrow lightbox__arrow--left"
        @mousedown.stop.prevent="prev"
        @touchdown.stop.prevent="prev"
      >
        <transition name="lightbox-fade">
          <div
            class="lightbox__arrow-icon"
            v-if="has_prev() && controlsVisible"
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="rgba(20, 20, 20, 0.4)" />
              <path
                d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
                fill="white"
              />
              <path d="M0-.5h24v24H0z" fill="none" />
            </svg>
          </div>
        </transition>
      </div>
      <div
        class="lightbox__arrow lightbox__arrow--right"
        @mousedown.stop.prevent="next"
        @touchdown.stop.prevent="next"
      >
        <transition name="lightbox-fade">
          <div
            class="lightbox__arrow-icon"
            v-if="has_next() && controlsVisible"
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="rgba(20, 20, 20, 0.4)" />
              <path
                d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
                fill="white"
              />
              <path d="M0-.25h24v24H0z" fill="none" />
            </svg>
          </div>
        </transition>
      </div>
      <transition name="lightbox-fade">
        <div
          class="lightbox__caption"
          v-show="controlsVisible && filteredImages[index].alt"
          @mousedown.stop
          @touchdown.stop
        >
          <span unselectable="on">{{ filteredImages[index].alt }}</span>
        </div>
      </transition>
      <div
        class="lightbox__container"
        @mousedown.stop="hide"
        @touchdown.stop="hide"
      >
        <div
          class="lightbox__image"
          @mousedown.stop="lightboxClick"
          @touchdown.stop="lightboxClick"
        >
          <transition :name="slideTransitionName" mode="out-in">
            <g-image
              :key="index"
              :src="
                $imagePath(
                  'portfolio',
                  filteredImages[index].path,
                  filteredImages[index].name
                )
              "
            />
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LightBox',
  props: {
    images: {
      type: Array,
      required: true
    },
    filter: {
      type: String,
      default: 'all'
    },
    timeoutDuration: {
      type: Number,
      default: 3000
    },
    closeOnBackdropClick: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false,
      controlsVisible: true,
      index: 0,
      timer: null,
      slideTransitionName: 'lightbox-slide-next'
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyEventListener)
    window.addEventListener('mousemove', this.mouseEventListener)
    window.addEventListener('touchmove', this.mouseEventListener)
    window.addEventListener('mouseup', this.mouseEventListener)
  },
  destroyed() {
    window.removeEventListener('keydown', this.keyEventListener)
    window.removeEventListener('mousemove', this.mouseEventListener)
    window.removeEventListener('touchmove', this.mouseEventListener)
    window.removeEventListener('mouseup', this.mouseEventListener)
  },
  methods: {
    lightboxClick(event) {
      if (this.closeOnBackdropClick) {
        const target = event.target
        const lightboxWidth = target.clientWidth
        const lightboxHeight = target.clientHeight
        const img = new Image()
        img.src = this.filteredImages[this.index].name
        const actualImageWidth = (img.width / img.height) * lightboxHeight
        const actualImageHeight = (img.height / img.width) * lightboxWidth
        if (
          event.clientX < (lightboxWidth - actualImageWidth) / 2 ||
          event.clientX > (lightboxWidth + actualImageWidth) / 2
        ) {
          this.hide()
        } else if (
          event.clientY < (lightboxHeight - actualImageHeight) / 2 ||
          event.clientY > (lightboxHeight + actualImageHeight) / 2
        ) {
          this.hide()
        }
      }
    },
    show(imageName) {
      this.visible = true
      this.controlsVisible = true

      for (let i = 0; i < this.filteredImages.length; i++) {
        if (this.filteredImages[i].name === imageName) {
          this.index = i
          break
        }
      }
      this.restartCaptionTimer()
    },
    hide() {
      this.visible = false
      this.index = 0
      clearTimeout(this.timer)
    },
    has_next() {
      return this.index + 1 < this.filteredImages.length
    },
    has_prev() {
      return this.index - 1 >= 0
    },
    prev() {
      if (this.has_prev()) {
        this.slideTransitionName = 'lightbox-slide-prev'
        this.index -= 1
      }
    },
    next() {
      if (this.has_next()) {
        this.slideTransitionName = 'lightbox-slide-next'
        this.index += 1
      }
    },
    keyEventListener(e) {
      if (this.visible) {
        this.controlsVisible = true
        this.restartCaptionTimer()

        switch (e.key) {
          case 'ArrowRight':
            this.next()
            break
          case 'ArrowLeft':
            this.prev()
            break
          case 'ArrowDown':
          case 'ArrowUp':
          case ' ':
            e.preventDefault()
            break
          case 'Escape':
            this.hide()
            break
        }
      }
    },

    mouseEventListener() {
      if (this.visible) {
        this.controlsVisible = true
        this.restartCaptionTimer()
      }
    },

    restartCaptionTimer() {
      clearTimeout(this.timer)
      this.timer = setTimeout(
        function () {
          this.controlsVisible = false
        }.bind(this),
        this.timeoutDuration
      )
    }
  },
  computed: {
    filteredImages() {
      if (this.filter === 'all' || !this.filter.length) {
        return this.images
      } else {
        return this.images.filter(
          function (item) {
            return item.filter === this.filter
          }.bind(this)
        )
      }
    }
  }
}
</script>

<style lang="scss">
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(#252525, 0.3);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  z-index: 200;
  color: rgba(255, 255, 255, 0.8);
  &__close {
    position: fixed;
    z-index: 210;
    right: 0;
    top: 0;
    padding: 1rem;
    font-size: 1.7rem;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    color: white;
  }
  &__arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 0 2rem;
    height: 100%;
    width: 2rem;
    z-index: 100;
    &-icon {
      cursor: pointer;
    }
    &--right {
      right: 0;
    }
    &--left {
      left: 0;
    }
  }
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  &__image {
    img {
      max-height: 100%;
    }
  }
  &__caption {
    position: absolute;
    bottom: 15px;
    width: 100%;
    z-index: 100;
    text-align: center;
    text-shadow: 1px 1px 3px rgb(26, 26, 26);
    span {
      border-radius: 12px;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 2px 10px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
}

.lightbox__caption .lightbox-slide-next-enter-active,
.lightbox-slide-next-leave-active,
.lightbox-slide-prev-enter-active,
.lightbox-slide-prev-leave-active {
  transition: all 0.4s ease;
}

.lightbox-slide-next-enter {
  -webkit-transform: translateX(100px);
  -ms-transform: translateX(100px);
  transform: translateX(100px);
  opacity: 0;
}

.lightbox-slide-next-leave-to {
  -webkit-transform: translateX(-100px);
  -ms-transform: translateX(-100px);
  transform: translateX(-100px);
  opacity: 0;
}

.lightbox-slide-prev-enter {
  -webkit-transform: translateX(-100px);
  -ms-transform: translateX(-100px);
  transform: translateX(-100px);
  opacity: 0;
}

.lightbox-slide-prev-leave-to {
  -webkit-transform: translateX(100px);
  -ms-transform: translateX(100px);
  transform: translateX(100px);
  opacity: 0;
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: all 0.4s ease;
}

.lightbox-fade-enter,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
