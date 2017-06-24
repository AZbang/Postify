<template id="preview-post">
  <div class="column">
    <div class="ui card">
      <div class="blurring dimmable image">
        <div class="ui dimmer">
          <div class="content">
            <div class="center">
              <div class="ui inverted button read-more-button">
                <router-link to="/posts/0" class="read-more">Read More</router-link>
              </div>
            </div>
          </div>
        </div>
        <img :src="image">
      </div>
      <div class="content">
        <div class="right floated meta">{{date}}</div>
        <div class="header">{{title}}</div>
        <div class="meta author">{{author}}</div>
        <div class="description">
          <p>{{description}}</p>
        </div>
      </div>
      <div class="extra content">
        <rating-panel></rating-panel>
      </div>
    </div>
  </div>
</template>

<script>
  import RatingPanel from './RatingPanel.vue'

  export default {
    name: 'preview-post',
    components: {
      RatingPanel
    },
    data() {
      return {
        title: "Cute dog",
        author: "@mr.henry",
        date: "24-06-2017",
        image: "img/dog.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    },
    computed: {
      cover() {
        return "url(" + this.image + ")";
      }
    }
  }
</script>

<style scope>
  .read-more {
    color: #fff;
  }
  .read-more:hover {
    color: #333;
  }
  .read-more-button:hover > .read-more {
    color: #333;
  }
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
