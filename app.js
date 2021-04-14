const tracer = require('dd-trace').init();
const express = require('express');
const app = express();
const validator = require('@maxday/account-number-validator');
const pkg = require('./package');

const ddOptions = {
  'response_code':true,
  'tags': ['app:account-api']
}

const connectDatadog = require('connect-datadog')(ddOptions);
app.use(connectDatadog);

app.get('/accounts/:accountId', (req, res) => {
  throw "Error";
  if(validator.isValidAccount(req.params.accountId)) {
    const balance = Math.random() * 10e3;
    return res.send({
      balance
    });
  }
  return res.sendStatus(404);
});

app.get('/health', (_, res) => {
  return res.sendStatus(200);
});

app.get('/version', (_, res) => {
  return res.send({
    version: pkg.versionTag
  });
});

module.exports = app;