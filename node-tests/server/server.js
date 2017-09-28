const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Rodrigo',
      age: 30
    }, {
      name: 'Damaris',
      age: 11
    }, {
      name: 'Tripiny',
      age: 16
    }
  ]);
});

app.listen(3000);

module.exports.app = app;
