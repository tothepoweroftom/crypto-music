import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store =  new Vuex.Store({
  state: {

    p5Object: null,

  },
  mutations:{
    setp5(state, payload) {
      console.log("Payload", payload)
      state.p5Object = payload;
    }
  },
  actions: {
    setp5ToState({ state, commit}, value) {
      commit("setp5", value)
    }
  }
})

export default store