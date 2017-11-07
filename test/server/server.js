const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo app v1.90'
  });
});

app.get('/users', (req, res) => {
  res.send([
  {
    name: 'Mike', age: 27
  },
  {
    name: 'Andre', age: 28
  },
  {
    name: 'bla', age:29
  }]);
});


app.listen(3000);

module.exports.app = app;
