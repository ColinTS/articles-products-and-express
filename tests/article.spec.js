 /*jshint esversion: 6*/
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../server.js');

describe('POST an article', function() {
  it('/articles responds with html', function(done) {
    request(app)
      .get('/articles')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});





