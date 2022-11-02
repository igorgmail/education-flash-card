const React = require('react');
const Layout = require('./Layout');

module.exports = function Registr() {
  return (
    <Layout>
      <link rel="stylesheet" href="styles/main.css" />
      <div className="container">
        <form className="regForm" action="/registration" method="POST">
          <div className="mb-3">
            <label htmlFor="exampleInputLogin1" className="form-label">Login</label>
            <input name="login" type="text" className="form-control" id="exampleInputLogin1" aria-describedby="loginHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Registration</button>
        </form>
      </div>
    </Layout>
  );
};
