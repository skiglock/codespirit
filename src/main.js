import DefaultLayout from '~/layouts/Default.vue'
import { imagePath } from './utils/imagePath'

// Fonts
import HebarExtraLightNormal from '@/assets/fonts/HebarExtraLight-Normal.woff2'
import ChaletNewYorkNineteenEighty from '@/assets/fonts/Chalet-NewYorkNineteenEighty.woff2'
import OksFree from '@/assets/fonts/OksFree.woff2'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.prototype.$imagePath = imagePath

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
