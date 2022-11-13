import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const bbb = function () { return 'string' }

async function funAsy () {
  const a = await 1
  const b = await new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('time')
    }, 3000)
  })
  const c = await bbb()
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
