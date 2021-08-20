import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    count: st => st.count,
  }
})
