'use strict';
var chai = require('chai');
var supertest = require('supertest');
var api = supertest('https://api.ofx.com'); // supertest init;

chai.should();

describe('/Countries', function() {
  describe('get', function() {
    it('should respond with 200 OK', function(done) {
	  this.timeout(0);
      api.get('/RefData.ApiService/Countries')
      .set('Content-Type', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
    });

  });

});
