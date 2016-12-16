'use strict';
var chai = require('chai');
var supertest = require('supertest');
var api = supertest('https://api.ofx.com'); // supertest init;

chai.should();

describe('/TryConvertToDealingDate?Currency={Currency}&UtcDateTime={UtcDateTime}&System={System}', function() {
  describe('get', function() {
    it('should respond with 200 OK', function(done) {
      api.get('/RefData.ApiService/TryConvertToDealingDate?Currency={Currency PARAM GOES HERE}&UtcDateTime={UtcDateTime PARAM GOES HERE}&System={System PARAM GOES HERE}')
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

    it('should respond with 401 Unauthorized', function(done) {
      api.get('/RefData.ApiService/TryConvertToDealingDate?Currency={Currency PARAM GOES HERE}&UtcDateTime={UtcDateTime PARAM GOES HERE}&System={System PARAM GOES HERE}')
      .set('Content-Type', 'application/json')
      .set({
        'Content-Type': 'DATA GOES HERE'
      })
      .expect(401)
      .end(function(err, res) {
        if (err) return done(err);

        res.body.should.equal(null); // non-json response or no schema
        done();
      });
    });

    it('should respond with 403 Forbidden', function(done) {
      api.get('/RefData.ApiService/TryConvertToDealingDate?Currency={Currency PARAM GOES HERE}&UtcDateTime={UtcDateTime PARAM GOES HERE}&System={System PARAM GOES HERE}')
      .set('Content-Type', 'application/json')
      .set({
        'Content-Type': 'DATA GOES HERE'
      })
      .expect(403)
      .end(function(err, res) {
        if (err) return done(err);

        res.body.should.equal(null); // non-json response or no schema
        done();
      });
    });

    it('should respond with 500 Internal Server Error', function(done) {
      api.get('/RefData.ApiService/TryConvertToDealingDate?Currency={Currency PARAM GOES HERE}&UtcDateTime={UtcDateTime PARAM GOES HERE}&System={System PARAM GOES HERE}')
      .set('Content-Type', 'application/json')
      .set({
        'Content-Type': 'DATA GOES HERE'
      })
      .expect(500)
      .end(function(err, res) {
        if (err) return done(err);

        res.body.should.equal(null); // non-json response or no schema
        done();
      });
    });

  });

});
