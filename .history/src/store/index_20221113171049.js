import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

async function fun0 () {
  console.log(1)
}

fun0().then(x => { console.log(x) })
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
