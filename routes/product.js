var express = require('express');
var router = express.Router();
const Products = require('../store/Products');
const Comment = require('../store/Comment');

/* GET products listing. */
router.get('/:valor', function(req, res) {
  const valor = req.params.valor
  
  Products.getProduct({valor})
  .then(function(zprod){
    let zid = zprod[0].id;
    let zname = zprod[0].name;
    let zdescription = zprod[0].description;
    let zprice = zprod[0].price;
    res.render('product', {zid, zname, zdescription, zprice} );
  });
});

module.exports = router;