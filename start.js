const app = require('./app');
const port = process.env.PORT || 3000;
// 
app.listen(port, () => {
    console.log(`Account-api listening on port ${port}`)
});


[{"q":"sum:trace.express.request.hits.by_http_status{http.status_code:404,service:account-api}.as_rate()","type":"line"}]