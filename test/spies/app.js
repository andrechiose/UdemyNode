var db = require('./db.js');

module.exports.handleSignUp = (email, password) => {
  // check if email already existst
  db.saveUser({ email, password });
  // send the welcome email
};
