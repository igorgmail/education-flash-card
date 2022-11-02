const router = require('express').Router();
const db = require('../../db/models');

router.post('/3', async (req, res) => {
  console.log('REQ PARAMS ', req.body); // { id: '25', set: 'set' }
  const checkInDb = await db.Question.findByPk(req.body.id);
  const trueAnswer = checkInDb.dataValues;
  console.log('▶ ⇛ trueAnswer', trueAnswer.answer);
  if (trueAnswer.answer === req.body.answer) {
    res.send('true');
  } else {
    res.send('false');
  }
});
module.exports = router;


router.post('/2', async (req, res) => {
  console.log('REQ PARAMS ', req.body); // { id: '25', set: 'set' }
  const checkInDb = await db.Question.findByPk(req.body.id);
  const trueAnswer = checkInDb.dataValues;
  console.log('▶ ⇛ trueAnswer', trueAnswer.answer);
  if (trueAnswer.answer === req.body.answer) {
    res.send('true');
  } else {
    res.send('false');
  }
});
module.exports = router;
