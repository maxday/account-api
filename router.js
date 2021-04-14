const express = require('express');
const validator = require('@maxday/account-number-validator');
const router = express.Router()

router.get('/accounts/:accountId', (req, res) => {
    if(validator.isValidAccount(req.params.accountId)) {
      const balance = Math.random() * 10e3;
      return res.send({
        balance
      });
    }
    return res.sendStatus(404);
  });
  
router.get('/health', (_, res) => {
    return res.sendStatus(200);
  });

module.exports = router