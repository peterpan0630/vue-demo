import Vue from 'vue'
import Vuex from 'vuex'
import HelloWorld from './modules/helloWorld'
import HelloWorld2 from './modules/helloWorld2'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { 
    rootSay: 'hahaha...'
  },
  mutations: { 
    sayMutations (state, payload) {
      state.rootSay = payload.say
    }
  },
  actions: {
    sayAction (context, payload) {
      setTimeout(() => {
        context.commit('sayMutations', payload)
      }, 1000)
    }
  },
  getters: {
    doneRootSay: (state, getters) => {
      console.log('getDoneRootSay...')
      return state.rootSay
    }
  },
  modules: {
    'helloWorld': HelloWorld,
    'helloWorld2': HelloWorld2
  }
})

export default store