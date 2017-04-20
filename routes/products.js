 /*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const products = require('../db/productsDB');


router.route('/')
  .post((req, res) => {
    products.createProduct(req.body);
    res.send('Product added!');
  });

module.exports = router;