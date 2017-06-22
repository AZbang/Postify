<template>
  <div id="app" class="ui container">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
  #app {
    padding-top: 100px;
    padding-bottom: 50px;
  }
</style>
