const state = () => ({
  appSettings: [],
  menuSettings: [],
  documentsSettings: []
})

const getters = {
  getAppSettings: (state) => {
    return state.appSettings
  },
  getMenuSettings: (state) => {
    return state.menuSettings
  },
  getDocumentsSettings: (state) => {
    return state.documentsSettings
  }
}

const actions = {}

const mutations = {
  setAppSettings(state, payload) {
    state.appSettings = payload
  },
  setMenuSettings(state, payload) {
    state.menuSettings = payload
  },
  setDocumentsSettings(state, payload) {
    state.documentsSettings = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
