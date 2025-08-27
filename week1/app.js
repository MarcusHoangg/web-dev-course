const express = require('express');
const app = express();
const port = 3001;

// route gốc
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// chạy server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
