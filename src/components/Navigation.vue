<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/shop">Shop</router-link> |
    <router-link to="/news">News</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'BaseNavigation'
}
</script>

<style scoped>
nav {
  margin: 24px 0;
}
nav a {
  color: #42b983;
  text-decoration: none;
  margin: 0 8px;
  font-weight: bold;
}
nav a.router-link-exact-active {
  color: #35495e;
}
</style>
