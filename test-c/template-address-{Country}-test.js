'use strict';
var chai = require('chai');
var supertest = require('supertest');
var api = supertest('https://api.ofx.com'); // supertest init;

chai.should();

describe('/template/address/{Country}', function() {
  describe('get', function() {
    it('should respond with 200 OK', function(done) {
      api.get('/RefData.ApiService/template/address/{Country PARAM GOES HERE}')
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

    it('should respond with 400 Bad Request', function(done) {
      api.get('/RefData.ApiService/template/address/{Country PARAM GOES HERE}')
      .set('Content-Type', 'application/json')
      .set({
        'Content-Type': 'DATA GOES HERE'
      })
      .expect(400)
      .end(function(err, res) {
        if (err) return done(err);

        res.body.should.equal(null); // non-json response or no schema
        done();
      });
    });

  });

});
