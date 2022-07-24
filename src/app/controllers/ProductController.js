const Product = require('../models/Product');
const Category = require('../models/Category');
const Color = require('../models/Color');
const Size = require('../models/Size');
const { mongooseToObject, mutipleMongooseToOject } = require('../../util/mongoose');

class ProductController {
  // [GET] /products
  index(req, res, next) {
    Product.find({})
    .then((products) => {
      // products = products.map(products => products.toObject());
      res.render('list_product', {
        layout: 'admin/main',
        products: mutipleMongooseToOject(products),
      });
    })
    .catch(next);
  }
  // [GET] /products/:slug
  show(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((product) => {
        res.render('product-detail', {
          layout: 'website/detail',
        // res.render('add_product', {
        //   layout: 'admin/main',
          product: mongooseToObject(product),
        });
      })
      .catch(next);
  }
  // [GET] admin/products/create
  create(req, res, next) {
    Category.find({})
    .then((categories) => {
      // products = products.map(products => products.toObject());
      res.render('add_product', {
        layout: 'admin/main',
        categories: mutipleMongooseToOject(categories),
      });
    })
    .catch(next);
  }
  // [POST] admin/products/
  store(req, res, next) {
    let product = new Product({ 
      name: req.body.product_name,
      title: req.body.product_title,
      description: req.body.product_description,
      image: req.body.product_image,
      price: req.body.product_price,
      category: req.body.category_id,
    })
    product = product.save();

    if (!product)
    return res.status(400).send('The product can not be created!')

    res.redirect('/admin/products');
  }
}
module.exports = new ProductController();
