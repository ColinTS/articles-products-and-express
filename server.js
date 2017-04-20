 /*jshint esversion: 6*/
const products = require('./routes/products.js');
// const articles = require('db/articles.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse application
app.use(bodyParser.urlencoded({extended: false}));

//attach products router to express
app.use('/products', products);


const server = app.listen(3000, () => {
  console.log('server listening on port 3000');
});