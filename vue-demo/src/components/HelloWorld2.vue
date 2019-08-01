<template>
  <div class="hello">
    helloworld2
    <p>{{msg}}</p>
    <p>helloWorldSay2: {{helloWorldSay2}}</p>
    <p><button v-on:click="sayAction({say: 'ohohoh...'})">say</button></p>
    <p><button v-on:click="prevStep">prev step</button></p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HelloWorld2',
  data () {
    // 组件的data必须是函数
    return {
      msg: 'Welcome to Your Vue.js App2'
    }
  },
  computed: {
    ...mapState('helloWorld2', ['helloWorldSay2'])
  },
  methods: {
    prevStep () {
      this.$router.push('/')
    },
    ...mapActions('helloWorld2', ['sayAction'])
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
