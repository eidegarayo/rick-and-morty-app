const express = require('express');

const testAPIRouter = require('./routes/testAPI');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/testAPI', testAPIRouter);

module.exports = app;
