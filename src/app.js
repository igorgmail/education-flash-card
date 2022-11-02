require('dotenv').config();
require('@babel/register');

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const { PORT, DATABASE_URL, SESSION_SECRET } = process.env;
const { sequelize } = require('../db/models');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

const homeRouter = require('./routes/homeRoute');
const registerRouter = require('./routes/registerRoute');
const loginRouter = require('./routes/loginRoute');
const deckRouter = require('./routes/deckRouter');
const cardsRouter = require('./routes/cardsRouter');
const checkRouter = require('./routes/checkRouters');
// const Stat = require('./stat');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'flashCookie',
  store: new FileStore(),
  secret: SESSION_SECRET ?? 'flash',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};
// const stat = new Stat('ivan', 0);
// stat.scorePlus();
app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, '../public/')));

app.use('/', homeRouter);
app.use('/registration', registerRouter);
app.use('/login', loginRouter);
app.use('/decks', deckRouter);
app.use('/cards', cardsRouter);
app.use('/check', checkRouter);
// app.use('/cards', cardsRouter);

app.get('/logout', (req, res) => {
  if (req.session.newUser) {
    req.session.destroy(() => {
      res.clearCookie('flashCookie');
      res.redirect('/');
    });
  } else {
    res.redirect('/login');
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('База данных успешно подключена! :)');
  } catch (error) {
    console.error('База данных не подключена:', error.message);
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});

// module.exports = { stat };
