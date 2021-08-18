import Vue from 'vue'
import Vuex from 'vuex'
import modal from './modules/modal'

Vue.use(Vuex)

const store = {
  modules: {
    modal
  }
}

export default new Vuex.Store(store)
