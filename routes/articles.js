/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const articles = require('../db/articlesDB');
var methodOverride = require('method-override');

//articles
router.route('/')
  .get((req, res) => {
    res.render('articles/index', {catalog: articles.getArticles()});
  })
  .post((req, res) => {
    if(req.body.hasOwnProperty('title') && req.body.hasOwnProperty('body') && req.body.hasOwnProperty('author')){
      articles.createArticle(req.body);
      res.render('articles/index', {catalog: articles.getArticles()});
    } else {
      res.render('new', articles.error('newArticleError'));
    }
  });

//form to create a new article
router.route('/new')
  .get((req, res) => {
    res.render('articles/new');
  });

//articles by title
router.route('/:title')
  .get((req, res) => {
    articles.titleArticle(req.params.title);
    res.render('articles/article', articles.titleArticle());
  })
  .put((req, res) => {
    if(articles.checkTitle(req.params.title) && req.body.author && req.body.body){
      articles.editArticle(req.body, req.params.title);
      res.redirect(303, `/articles/${req.params.title}`);
    } else {
      res.render('articles/edit', articles.error('editArticleError'));
    }
  })
  .delete((req, res) => {
  if(articles.checkTitle(req.params.title)){
    articles.deleteArticle(req.params.title);
    res.render('articles/index', articles.success());
  } else {
    res.redirect('/articles');
  }
});

//form for editing an article
router.route('/:title/edit')
  .get((req, res) => {
    articles.titleArticle(req.params.title);
    res.render('articles/edit', articles.titleArticle());
  });

  module.exports = router;