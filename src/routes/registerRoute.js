const bcrypt = require('bcrypt');

const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Registr = require('../views/Register');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Registr, null, res);
});

router.post('/', async (req, res) => {
  // console.log(req.body);
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.redirect('/login');
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ login, password: hash });
    req.session.newUser = newUser.login;
    req.session.newUserID = newUser.id;
    // console.log('=====>', req.session.newUserID);
    req.session.save(() => {
      res.redirect('/');
    });
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;
