const express = require('express');
const app = express();
const validator = require('@maxday/account-number-validator');

app.get('/accounts/:accountId', (req, res) => {
  if(validator.isValidAccount(req.params.accountId)) {
    const balance = Math.random() * 10e3;
    return res.send({
      balance
    });
  }
  return res.sendStatus(404);
});

module.exports = app;