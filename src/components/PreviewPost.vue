<template id="preview-post">
  <div class="column">
    <div class="ui card">
      <div class="blurring dimmable image">
        <div class="ui dimmer">
          <div class="content">
            <div class="center">
              <div class="ui inverted button">
                <router-link to="/posts/0" class="read-more">Read More</router-link>
              </div>
            </div>
          </div>
        </div>
        <img src="dist/img/dog.jpg">
      </div>
      <div class="content">
        <div class="right floated meta">24 June, 2017</div>
        <div class="header">Cute Dog</div>
        <div class="meta">@azbang</div>
        <div class="description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="extra content">
        <span class="btn left floated like">
          <i class="thumbs horizontally flipped up icon"></i>
          124
        </span>
        <span class="btn right floated dislike">
          <i class="thumbs down icon"></i>
          1556
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'preview-post'
  }
</script>

<style scope>
  .btn {
    cursor: pointer;
  }
  .like:hover {
    color: rgb(97, 182, 76);
  }
  .dislike:hover {
    color: rgb(240, 69, 56);
  }
</style>
