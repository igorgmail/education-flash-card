const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Deck = require('../views/Deck');
const db = require('../../db/models');

router.get('/', async (req, res) => {
  const newUser = req.session?.newUser;

  const allDecks = await db.Deck.findAll({ raw: true });
  // console.log('▶ ⇛ allDecks', allDecks);
  // const decksData = allDecks.map((el) => console.log(el.get()));
  // console.log('▶ ⇛ decksData', decksData);
  const allQuestions = await db.Question.findAll({ where: { deckId: '1' } });
  // allQuestions.map((el) => console.log(el.dataValues));
  // console.log(allQuestions);
  renderTemplate(Deck, { newUser, allDecks }, res);
});

router.get('/:id', (req, res) => {
  res.send(console.log(req.params)); // { id: '25', set: 'set' }
});
module.exports = router;
