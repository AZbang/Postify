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
  </div>
</template>

<script>
  import PreviewPost from './PreviewPost.vue'

  export default {
    name: 'all-posts',
    components: {
      PreviewPost
    }
  }
</script>

<style>
  .posts {
    margin-top: 30px !important;
  }
</style>
