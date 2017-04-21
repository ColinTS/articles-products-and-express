 /*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const products = require('../db/productsDB');
var methodOverride = require('method-override');

//products
router.route('/')
  .get((req, res) => {
    res.render('index', {catalog: products.getProducts()});
  })
  .post((req, res) => {
    if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')){
      products.createProduct(req.body);
      res.redirect('/products');
    } else {
      res.render('new', products.error());
    }
  });

//form to create a new product
router.route('/new')
  .get((req, res) => {
    res.render('new');
  });

//products by id
router.route('/:id')
  .get((req, res) => {
    products.idProduct(req.params.id);
    res.render('product', products.idProduct());
  })
  .put((req, res) => {
    if(products.checkID(req.params.id)){
      products.editProduct(req.body, req.params.id);
      res.redirect(303, `/products/${parseInt(req.params.id)}`);
    } else {
      res.redirect(303, `/products/${parseInt(req.params.id)}/edit`);
    }
  })
  .delete((req, res) => {
  if(products.checkID(req.params.id)){
    products.deleteProduct(req.params.id);
    res.render('index', products.success());
  } else {
    res.redirect('/products');
  }
});

//form for editing a product
router.route('/:id/edit')
  .get((req, res) => {
    products.idProduct(req.params.id);
    res.render('edit', products.idProduct());
  });



module.exports = router;