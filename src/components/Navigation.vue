<template>
  <nav class="ui secondary pointing menu">
    <router-link to="/" class="item">Most popular</router-link>
    <router-link to="/all" class="item">All posts</router-link>
    <router-link to="/create" class="item">Create post</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style media="screen">
  .ui.secondary.pointing.menu .router-link-exact-active.item {
    background-color: transparent;
    box-shadow: none;
    border-color: #1B1C1D;
    font-weight: 700;
    color: rgba(0,0,0,.95);
  }
</style>
