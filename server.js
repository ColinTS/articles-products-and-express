 /*jshint esversion: 6*/
const products = require('./routes/products.js');
const articles = require('./routes/articles.js');
const express = require('express');
var methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

//parse application
app.use(bodyParser.urlencoded({extended: true}));

//method override
app.use(methodOverride('_method'));

//attach products router to express
app.use('/products', products);

//attach articles router to express
app.use('/articles', articles);

//handlebars setup
const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'main'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');






const server = app.listen(3000, () => {
  console.log('server listening on port 3000');
});