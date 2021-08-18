import Vuex from 'vuex'
import store from '@/store'
import DefaultLayout from '~/layouts/Default.vue'
import imagePath from './utils/imagePath'
import boxShadow from './utils/boxShadow'
import skeletonLoader from '@/components/Base/SkeletonLoader'

// Fonts
import HebarExtraLightNormal from '@/assets/fonts/HebarExtraLight-Normal.woff2'
import ChaletNewYorkNineteenEighty from '@/assets/fonts/Chalet-NewYorkNineteenEighty.woff2'
import OksFree from '@/assets/fonts/OksFree.woff2'
import animate from './directives/animate'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)
  appOptions.store = store
  // Components
  Vue.component('Layout', DefaultLayout)
  Vue.component('skeleton-loader', skeletonLoader)
  // Global Func
  Vue.prototype.$imagePath = imagePath
  Vue.prototype.$boxShadow = boxShadow
  // Directives
  Vue.directive('animate', animate)
  // Head
  head.htmlAttrs = { lang: 'ru' }
  head.link.push({
    rel: 'preload',
    href: HebarExtraLightNormal,
    as: 'font',
    crossorigin: true
  })
  head.link.push({
    rel: 'preload',
    href: ChaletNewYorkNineteenEighty,
    as: 'font',
    crossorigin: true
  })
  head.link.push({
    rel: 'preload',
    href: OksFree,
    as: 'font',
    crossorigin: true
  })
}
