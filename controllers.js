// controllers.js
const getRoot = (req, res) => {
  res.send('I am endpoint GET /');
};

module.exports = { getRoot };
