const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      Hello user!
      {' '}
      { newUser }
    </Layout>
  );
};
