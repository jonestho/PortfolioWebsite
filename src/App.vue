<template>
  <div id="app">
    <HomePage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HomePage from './components/pages/Home.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
  html,
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
  }

  #app {
    height: inherit;
    width: inherit;
  }
</style>
