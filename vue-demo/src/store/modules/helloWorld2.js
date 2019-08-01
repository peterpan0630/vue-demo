export default {
  namespaced: true,
  state: {
    helloWorldSay2: 'helloWorld2...'
  },
  mutations: {
    sayMutations (state, payload) {
      state.helloWorldSay2 = payload.say
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
    helloWorldSay2: (state, getters) => {
      console.log('getHelloWorldSay2...')
      return state.helloWorldSay2
    }
  }
}