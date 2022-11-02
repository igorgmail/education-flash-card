const React = require('react');
const Layout = require('./Layout');

module.exports = function Deck({ newUser, allDecks }) {
  console.log('allDecks------------>', allDecks);
  return (

    <Layout newUser={newUser}>
      <div className="decks-title">
        <h2>Выбери категорию</h2>
      </div>
      <div className="container">
        <div className="row decks-wrap">

          {Array.isArray(allDecks) && allDecks.map((deck) => (
            <div className="card deck-item">
              <img src={`/img/${deck.img}`} className="card-img-top deck-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title" />
                <p className="card-text">{`${deck.title}`}</p>
                <a href={`/cards/${deck.id}`}>
                  {' '}
                  <button type="button" className="btn btn-success">Перейти</button>
                  {' '}
                </a>
                {/* <a href={`/cards/${deck.id}`} className="list-group-item list-group-item-action item-one" /> */}
              </div>
            </div>
          ))}

        </div>
      </div>
    </Layout>

  );
};
