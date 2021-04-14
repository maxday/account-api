const tracer = require('dd-trace').init();
const express = require('express');
const app = express();
const router = require('./router');
const port = process.env.PORT || 3000;

const ddOptions = {
  'response_code':true,
  'tags': ['app:account-api']
}

const connectDatadog = require('connect-datadog')(ddOptions);
app.use(connectDatadog);
app.use('/', router);

app.listen(port, () => {
    console.log(`Account-api listening on port ${port}`)
});