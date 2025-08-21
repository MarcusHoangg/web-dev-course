// app.js
const express = require('express');
const app = express();
const { getRoot } = require('./controllers'); // import
const port = 3001;

app.get('/', getRoot); // dùng làm callback

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
