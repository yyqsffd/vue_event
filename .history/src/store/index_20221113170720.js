import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const bbb = function () { return 'string' }

async function funAsy () {
  const a = 1
  const b = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('time')
    }, 3000)
  })
  const c = bbb()
  console.log(a, b, c)
}

funAsy()

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
