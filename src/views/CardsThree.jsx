const React = require('react');
const Layout = require('./Layout');

module.exports = function CardsTwo({ newUser, allQuestions }) {
  console.log('▶ ⇛ VIEWS__allQuestions', allQuestions);

  return (
    <Layout newUser={newUser}>
      Hello CardsTwo
      {' '}
      {newUser}
      <div className="container">
        <div className="questions-block">
          {Array.isArray(allQuestions) && allQuestions.map((el) => (
            <div className="card" data-dataid={el.id}>
              <div className="card-body" data-id={el.id}>
                <div className="card-header">
                  <h5 className="card-title">Хэллоуин</h5>
                  <div className="check-true" hidden="true">Верно</div>
                  <div className="check-false" hidden="true">Неверно</div>
                </div>
                <p className="card-text">{el.body}</p>
                <div className="button-container">
                  <div className="row">
                    <div className="col-6 button-wrap">
                      <button type="button" className="btn btn-primary">{`${el.answerOne}`}</button>
                    </div>
                    <div className="col-6 button-wrap">
                      <button type="button" className="btn btn-primary">{`${el.answerTwo}`}</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 button-wrap">
                      <button type="button" className="btn btn-primary">{`${el.answerThree}`}</button>
                    </div>
                    <div className="col-6 button-wrap">
                      <button type="button" className="btn btn-primary">{`${el.answerFour}`}</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <script defer src="../script/setThree.js" />
    </Layout>
  );
};
