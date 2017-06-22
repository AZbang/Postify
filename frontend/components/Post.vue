<template>
  <article id="post">
    <div class="cover" :style="{backgroundImage: cover}"></div>
    <div class="panel-control">
      <rating-panel></rating-panel>
    </div>
    <h1>{{title}}</h1>
    <div class="meta">
      <a href="#" class="author">{{author}}</a>
      <time><i class="wait icon"></i>{{date}}</time>
    </div>
    <br>
    <p class="content markdown">{{content}}</p>
  </article>
</template>

<script>
  import RatingPanel from './RatingPanel.vue'

  export default {
    name: 'post',
    components: {
      RatingPanel
    },
    data() {
      return {
        title: "Cute Dog",
        image: "img/dog.jpg",
        author: "@mr.henry",
        date: "24-06-2017",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    },
    computed: {
      cover() {
        return "url(" + this.image + ")";
      }
    }
  }
</script>

<style>
  #post {
    margin-bottom: 300px;
  }
  .cover {
    width: 100%;
    height: 300px;
    background-position: center;
    background-size: cover;
  }
  .panel-control {
    float: right;
    font-size: 1.4em;
    margin-top: 31px;
  }
  #post .btn {
    margin-left: 30px;
  }
  .content {
    font-size: 1.5em;
  }
</style>
