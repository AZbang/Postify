<template>
  <nav class="ui secondary fixed top pointing menu">
    <div class="ui container">
      <a href="#" class="brand item">Postify</a>
      <router-link to="/" class="item">Most popular</router-link>
      <router-link to="/all" class="item">All posts</router-link>
      <router-link to="/create" class="item">Create post</router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style scoped>
  nav {
    background: #fff !important;
    font-size: 1.2em !important;
  }
  .brand {
    font-weight: 700;
  }
  .ui.secondary.pointing.menu .router-link-exact-active.item {
    border-bottom: 2px solid #333;
    border-color: #1B1C1D;
    font-weight: 700;
    color: rgba(0,0,0,.95);
  }
</style>
