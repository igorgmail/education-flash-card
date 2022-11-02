const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const db = require('../../db/models');
const cardsThree = require('../views/CardsThree');
const cardsTwo = require('../views/CardsTwo');
const cardsOne = require('../views/CardsOne');

router.get('/:id', async (req, res) => {
  const newUser = req.session?.newUser;
  const { id } = req.params;
  // console.log('▶ ⇛ id', id);
  const allQuestions = await db.Question.findAll({ where: { deckId: id }, raw: true });
  if (id === '3') renderTemplate(cardsThree, { newUser, allQuestions }, res);
  if (id === '2') renderTemplate(cardsTwo, { newUser, allQuestions }, res);
  if (id === '1') renderTemplate(cardsOne, { newUser, allQuestions }, res);
});

router.post('/:id', async (req, res) => {
  const { userAnswer } = req.body;
  const { id } = req.params;
  try {
    const answerDb = await db.Question.findOne({ where: { id }, raw: true });
    if (answerDb) {
      if (userAnswer === answerDb.answer) { res.json({ correct: true }); }
      else {res.json({ correct: false })};
    }
  } catch (error) {
    console.log('Error: ', error);
  }
  res.end();
});

module.exports = router;
