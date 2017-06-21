import VueRouter from 'vue-router';

import AllPosts from './components/AllPosts.vue'
import CreatePost from './components/CreatePost.vue'
import Post from './components/Post.vue'
import NotFound from './components/NotFound.vue'

var router = new VueRouter({
  routes: [
    {path: '*', component: NotFound},
    {path: '/', component: AllPosts},
    {path: '/posts', component: AllPosts},
    {path: '/posts/:id([0-9]+)', component: Post},
    {path: '/create', component: CreatePost}
  ]
});

export default router;
