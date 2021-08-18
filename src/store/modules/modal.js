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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
