<template>
  <div class="rating-panel">
    <span class="btn left floated like">
      <i class="icon" :class="likeIcon"></i>
      {{likes}}
    </span>
    <span class="btn right floated dislike">
      <i class="icon" :class="dislikeIcon"></i>
      {{dislikes}}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'rating-panel',
    data() {
      return {
        dislikeIcons: ["bomb", "fire"],
        likeIcons: ["birthday", "gift"],
        likes: 13566,
        dislikes: 35
      }
    },
    computed: {
      likeIcon() {
        return this._randomArrValue(this.likeIcons);
      },
      dislikeIcon() {
        return this._randomArrValue(this.dislikeIcons);
      }
    },
    methods: {
      _randomArrValue(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
      }
    }
  }
</script>

<style scoped>
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
