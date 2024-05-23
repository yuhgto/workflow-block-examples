const jwt = require('jsonwebtoken');

async function addNewLogin(req, res) {
  console.log('Add a saved login here');
  const { token, backToUrl } = req.query;
  res.sendFile(__dirname + '/credentialsScreen.html');
}

async function fetchSavedLogins(req, res) {
  res.status(200).json([
    { title: "Dipro's API key", value: 'abc1234' },
    { title: "Rachel's API key", value: 'bcd2345' },
  ]);
}

module.exports = {
  addNewLogin,
  fetchSavedLogins,
};
