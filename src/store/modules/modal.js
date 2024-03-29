const state = () => ({
  title: '',
  isOpen: false
})

const getters = {
  getModalTitle: (state) => {
    return state.title
  },
  getModalIsOpen: (state) => {
    return state.isOpen
  }
}

const actions = {}

const mutations = {
  setModalTitle(state, payload) {
    state.title = payload
  },
  setModalIsOpen(state, payload) {
    state.isOpen = payload
  },
  setModalSettings(state, payload) {
    state.title = payload
    state.isOpen = true
  },
  resetModalSettings(state) {
    setTimeout(() => {
      state.title = ''
    }, 500)
    state.isOpen = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
