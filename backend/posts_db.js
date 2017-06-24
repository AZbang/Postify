const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(__dirname + '/posts.db');

var addPost = (params) => {
  db.run(
    "INSERT INTO posts (title, cover, author, author_link, date, description, content) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [params.title, params.cover, params.author, params.author_link, params.date, params.description, params.content]
  );
}
var getPost = (id) => {
  db.query("SELECT * FROM posts WHERE id=" + id, (err, row) => {
    if(err) throw err;
    return row;
  });
}
var getPopularPosts = (start, amt) => {

}
var getPosts = (start, amt, cb) => {
  db.all(`SELECT * FROM posts WHERE id `, (err, rows) => {
    if(err) throw err;
    cb(rows);
  });
}

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS posts(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, author TEXT, author_link TEXT, cover TEXT, date TEXT, likes INT, dislike INT, description TEXT, content TEXT)");

  addPost({
    "title": "Cute dog",
    "author": "mr. henry",
    "author_link": "example.com",
    "date": "Fri Jun 23 2017 15:19:20 GMT+0300 (MSK)",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "content": "**Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.**"
  });
});

module.exports = {
  addPost,
  getPost,
  getPosts,
  getPopularPosts
}
