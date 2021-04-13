const app = require('./app');
const port = process.env.PORT || 3000;

//Datadog config
const ddOptions = {
    'response_code':true,
    'tags': ['app:account-api']
  }

const connectDatadog = require('connect-datadog')(ddOptions);
app.use(connectDatadog);

app.listen(port, () => {
    console.log(`Account-api listening on port ${port}`)
});