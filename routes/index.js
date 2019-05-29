const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const Comment = require('../store/Comment');

/* GET home page. */
router.get('/', function (_, res) {
  Products.get()
    .then(function (products) {
      res.render('index', { products });
    })
});

/* Delete product. */
router.post('/', function (req, res) {
  //let param_id = req.params.id;
  Products.delete({ id: req.body.id }).then(function (products) {
    //res.end(`Produto ${prod} excluído!`);
    res.render('index', { products });
  })
});

/* Update product. */
router.post('/update', function (req, res) {
  Products.update(req.body)
    .then(function (prd) {
      //res.end(`Produto ${prod} atualizado!`);
      Products.get().then(function (products) {
        res.render('index', { products });
        //console.log(products);
      })
      //res.render('index', { products });
    })
});

//New comment
router.post('/newComment', function (req, res, next) {

  let item = {
    author: req.body.nameUser,
    comment: req.body.comment,
  };
  let data = new Comment(item);
  data.save();
  //console.log(item);
  //console.log(data);

  res.redirect('/comments');
});

router.get('/comments', function (req, res, next) {
  Comment.find()
    .then(function (doc) {
      res.render('product', { items: doc });
    });
});

module.exports = router;
