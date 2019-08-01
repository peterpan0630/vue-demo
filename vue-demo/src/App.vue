<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>rootSay: {{rootSay}}</p>
    <p>doneRootSay: {{doneRootSay}}</p>
    <button v-on:click="sayAction({say: 'ohohoh...'})">say</button>
    <p>-------------路由分割线-------------</p>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['rootSay']),
    ...mapGetters(['doneRootSay'])
  },
  methods: {
    ...mapActions(['sayAction'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
