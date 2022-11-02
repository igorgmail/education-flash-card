const bcrypt = require('bcrypt');

const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Login, null, res);
});

router.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (!user) {
      res.redirect('/registration');
      return;
    }
    const passCheck = await bcrypt.compare(password, user.password);
    if (passCheck) {
      req.session.newUser = user.login;
      req.session.newUserID = user.id;
      // console.log(req.session.newUserID);
      req.session.save(() => {
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;
