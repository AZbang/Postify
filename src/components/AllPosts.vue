<template>
  <div id="all-posts">
    <preview-post></preview-post>
  </div>
</template>

<script>
  import PreviewPost from './components/PreviewPost.vue'

  export default {
    name: 'all-posts',
    components: {
      PreviewPost
    }
  }
</script>
