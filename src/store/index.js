import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/settings'
import modal from './modules/modal'

Vue.use(Vuex)

const store = {
  modules: {
    settings,
    modal
  }
}

export default new Vuex.Store(store)
