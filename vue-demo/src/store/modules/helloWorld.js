export default {
  namespaced: true,
  state: {
    helloWorldSay: 'helloWorld...'
  },
  mutations: {
    sayMutations (state, payload) {
      state.helloWorldSay = payload.say
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
    helloWorldSay: (state, getters) => {
      console.log('getHelloWorldSay...')
      return state.helloWorldSay
    }
  }
}