import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router.js'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
});


$('.card  .image').dimmer({
  on: 'hover'
});
