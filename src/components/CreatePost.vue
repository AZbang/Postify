<template>
  <div id="create-post">
    <div class="ui form">
      <div class="field">
        <label>Title post</label>
        <input type="text" name="title" placeholder="OMG! CAT ON TREE!">
      </div>
      <div class="field">
        <label>Cover post</label>
        <input type="text" name="cover" placeholder="http://eskipaper.com/images/cat-on-tree-1.jpg">
      </div>
      <div class="two fields">
          <div class="three wide field">
            <label>Your username</label>
            <input type="text" name="username" placeholder="mr. Henry">
          </div>
          <div class="eight wide field">
            <label>Your username link</label>
            <input type="text" name="username_link" placeholder="http://twitter.com/mrhenrymtfk">
          </div>
      </div>
      <div class="field">
        <label>Description</label>
        <textarea rows="2" name="description" style="margin-top: 0px; margin-bottom: 0px; height: 58px;" placeholder="CAT ON TREE!"></textarea>
      </div>
      <div class="field">
        <label>Post <em>__Using Markdown__</em></label>
        <textarea name="text" placeholder="**HEY, MY NAME IS HENRY. I LOVE ANIMALS**"></textarea>
      </div>
      <button class="ui button">Create post</button>
      <button class="ui button">Preview post</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'create-post'
  }
</script>
