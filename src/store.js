import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token: null,
  list: []
}

const mutations = {
  SET_TOKEN (state, token) {
    console.log(state, token)
    state.token = token
  },
  REMOVE_TOKEN (state) {
    state.token = null
  },
  GET_LIST (state, list) {
    state.list = list
  }
}

export default new Vuex.Store({
  state,
  mutations
})
