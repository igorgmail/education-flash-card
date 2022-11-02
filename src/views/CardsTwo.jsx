const React = require('react');
const Layout = require('./Layout');
// const TwoCard = require('./TwoCard');

module.exports = function CardsTwo({ newUser, allQuestions }) {
  // console.log('▶ ⇛ VIEWS__allQuestions', allQuestions);
  // console.log('++++>>', newUser);

  return (
    <Layout newUser={newUser}>
      <script defer src="/js/index.js" />
      Hello
      {' '}
      {' '}
      {newUser}
      {' '}
      {' '}
      CardsTwo
      <div id="twoCardConteiner">
        {Array.isArray(allQuestions) && allQuestions.map((twoCard) => (
          <div data-id={twoCard.id} id="twoCard" id="targetTwo">
            <div className="card" style={{ width: '18rem' }, { margin: '1rem' }}>
              <div id={twoCard.id} className="card-body">
                <h5>
                  {twoCard.body}
                </h5>
                <button id="Да" name="answer" type="button" className="btn btn-primary btn-sm">Да</button>
                <button id="Нет" key={twoCard.id} name="answer" type="button" className="btn btn-primary btn-sm">Нет</button>
                <div className="check-true set2" hidden="true">Верно</div>
                <div className="check-false set2" hidden="true">Неверно</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div name="newButton" />
    </Layout>
  );
};
