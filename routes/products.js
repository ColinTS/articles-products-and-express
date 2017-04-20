 /*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const products = require('../db/productsDB');


router.route('/')
  .post((req, res) => {
    console.log(req.body);
    if(req.body.hasOwnProperty('name')){
      products.createProduct(req.body);
      res.redirect('/foo/bar');
    } else {
      res.render('/products/new', function(err, html) {
      res.send(html);
      });
    }
  });

router.route('/:id')
  .put((req, res) => {
    products.editProduct(req.body);
    res.send('Product edited!');
  });



module.exports = router;