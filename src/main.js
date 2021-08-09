import DefaultLayout from '~/layouts/Default.vue'
import { imagePath } from './utils/imagePath'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.prototype.$imagePath = imagePath
}
