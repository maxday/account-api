const request = require('supertest');
const assert = require('assert');
const app = require('../app');

describe('GET /accounts/:accountId', function(){
  it('should send 404 since the accountNumber is invalid', function(done){
    request(app)
      .get('/accounts/1234')
      .set('Accept', 'application/json')
      .expect(404, done);
  });

  it('should send 404 since the accountNumber is invalid', function(done){
    request(app)
      .get('/accounts/1234567')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        assert(response.body.hasOwnProperty('balance'),  true);
        done();
    })
    .catch(err => done(err))
  })
});