const React = require('react');
const Layout = require('./Layout');

module.exports = function CardsTwo({ newUser, allQuestions }) {
  return (
    <Layout newUser={newUser}>
      <script defer src="/js/cardsOne.js" />
      Hello
      {' '}
      {newUser}
      {' '}
      <div id="oneCardConteiner">
        {Array.isArray(allQuestions) && allQuestions.map((oneCard) => (
          <div id="twoCard" className="w-50 list-group">
            <div className="card" style={{ width: '18rem' }, { margin: '1rem' }}>
              <div id={oneCard.id} className="card-body">
                <h5>
                  {oneCard.body}
                </h5>
                <input name="cardOne" type="text" className="form-control" id="exampleInputLogin1" />
                <button id={oneCard.id} name="answer" type="button" className="btn btn-primary btn-sm">Ответить</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
