'use strict';
var chai = require('chai');
var supertest = require('supertest');
var api = supertest('https://api.ofx.com'); // supertest init;

chai.should();

describe('/AcquiredItems', function() {
  describe('get', function() {
    it('should respond with 200 OK', function(done) {
      api.get('/RefData.ApiService/AcquiredItems')
      .set('Content-Type', 'application/json')
      .set({
        'Content-Type': 'DATA GOES HERE'
      })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        res.body.should.equal(null); // non-json response or no schema
        done();
      });
    });

  });

});
