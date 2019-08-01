<template>
  <div class="hello">
    helloworld
    <p>{{msg}}</p>
    <p>helloWorldSay: {{helloWorldSay}}</p>
    <p><button v-on:click="sayAction({say: 'ohohoh...'})">say</button></p>
    <p><button v-on:click="nextStep">next step</button></p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    // 组件的data必须是函数
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState('helloWorld', ['helloWorldSay'])
  },
  methods: {
    nextStep () {
      this.$router.push('/helloWorld2')
    },
    ...mapActions('helloWorld', ['sayAction'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
