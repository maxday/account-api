const express = require('express');
const app = express();
const randomNumber = require('@maxday/random-number');
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hello World, here is my random number : ${randomNumber.generateNumber()}`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})