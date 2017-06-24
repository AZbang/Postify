'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const db = require("./backend/posts_db");

const app = express();
app.use(express.static(__dirname + '/public'));


// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/get_posts', (req, res) => {
  db.getPosts(res.s, res.m, (posts) => {
    res.send(posts);
  });
});

app.post('/api/add_post', (req, res) => {
  db.addPost({
      title: res.title,
      author: res.author,
      author_link: res.author_link,
      date: res.date,
      description: res.description,
      content: res.content
  });
});

app.listen(8080, () => {
  console.log('Server started!');
});
