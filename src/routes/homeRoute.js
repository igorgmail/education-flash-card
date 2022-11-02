const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

router.get('/', (req, res) => {
  const newUser = req.session?.newUser;
  renderTemplate(Home, { newUser }, res);
});

module.exports = router;
