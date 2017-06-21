<template>
  <nav class="navbar navbar-default" id="navigation">
      <router-link to="/">All posts</router-link>
      <router-link to="/create">Create post</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style>
  #navigation {
    width: 100%;
    height: 100px;
    margin-top: 20px;
  }
  #navigation > a {
    margin-right: 10px;
    padding: 20px;
    border-bottom: 4px solid rgb(94, 84, 205);
    transition: all .5s;
    color: rgb(110, 132, 223);
    font-size: 2em;
    text-decoration: none;
  }
  #navigation > a:hover {
    border-bottom: 4px solid rgba(94, 84, 205, .5);
  }
  #navigation > a.router-link-exact-active {
    border-bottom: 4px solid rgba(94, 84, 250, .5);
  }
</style>
