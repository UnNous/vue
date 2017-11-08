import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userid:'',
    password:''
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    
  }
})
