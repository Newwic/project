<template>
  <div id="app">
    <BaseNavigation />
    <router-view />
  </div>
</template>

<script>
import BaseNavigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: { BaseNavigation }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:rgb(0, 0, 0);
  margin-top: 60px;
}
</style>
