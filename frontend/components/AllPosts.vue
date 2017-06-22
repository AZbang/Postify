<template>
  <div id="all-posts">
    <div class="posts ui four column grid">
      <preview-post></preview-post>
      <preview-post></preview-post>
      <preview-post></preview-post>
      <preview-post></preview-post>
      <preview-post></preview-post>
      <preview-post></preview-post>
      <preview-post></preview-post>
      <preview-post></preview-post>
    </div>
    <i class="notched circle loading icon"></i>
  </div>
</template>

<script>
  import PreviewPost from './PreviewPost.vue'

  export default {
    name: 'all-posts',
    components: {
      PreviewPost
    },
    mounted() {
      $('.card .image').dimmer({
        on: 'hover'
      })
    }
  }
</script>

<style scoped>
  .loading {
    display: block;
    margin: 70px auto;
    font-size: 1.4em;
  }
</style>
