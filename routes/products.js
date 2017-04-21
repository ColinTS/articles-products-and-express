 /*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const products = require('../db/productsDB');


router.route('/')
  .get((req, res) => {
    res.render('index', {catalog: products.getProducts()});
  })
  .post((req, res) => {
    if(req.body.hasOwnProperty('name')){
      products.createProduct(req.body);
      res.redirect('/products');
    } else {
      res.render('/products/new', newProductForm);
    }
  });

router.route('/:id')
  .get((req, res) => {
    products.idProduct(req.params.id);
    res.render('product', products.idProduct());
  })
  .put((req, res) => {
    products.editProduct(req.body);
    res.send('Product edited!');
  })
  .delete((req, res) => {
    products.deleteProduct(req.params.id);
    res.send('Product deleted!');
  });



module.exports = router;