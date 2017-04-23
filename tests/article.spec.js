 /*jshint esversion: 6*/
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../server.js');

let article = {title: 'Dune', body: 'Hope clouds observation.', author: 'Frank Herbert'};

//GET tests
describe('GET an article', function() {
  it('/articles responds with html', function(done) {
    request(app)
      .get('/articles')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});

//POST tests
describe('POST an article', function() {
  it('/articles responds with html', function(done) {
    request(app)
      .post('/articles')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
  it('posts an article', function(done) {
    request(app)
      .post('/articles')
      .send(article)
      .set('accept','application/json')
      .expect(200)
      .end(function(err, res){
        if(err){
          return done(err);
        }
        article = res.body;
        done();
      });
  });
  it('renders /new if article is not propery posted', function(done) {
    request(app)
      .post('/articles')
      .send({body: 'Hope clouds observation.', author: 'Frank Herbert'})
      .set('accept','application/json')
      .expect(200)
      .end(function(err, res){
        if(err){
          return done(err);
        }
        article = res.body;
        done();
      });
  });
});

//PUT tests
describe('PUT an article', function() {
  it('/articles responds with html', function(done) {
    request(app)
      .put('/articles/Dune')
      .send({title: 'Dune 2', body: 'Hope clouds observation.', author: 'Frank Herbert'})
      .expect(200, done);
  });
});

//DELTE tests
describe('DELETE an article', function() {
  it('/articles responds with html', function(done) {
    request(app)
      .put('/articles/Dune')
      .send({title: 'Dune 2', body: 'Hope clouds observation.', author: 'Frank Herbert'})
      .expect(200, done);
  });
});






