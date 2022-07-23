const Product = require('../models/Product');
const Category = require('../models/Category');
const { mutipleMongooseToOject } = require('../../util/mongoose');

class HomeController {
  // [GET] /
  index(req, res, next) {
    // Product.find({}, function (err, products) {
    //     if (!err) {
    //         res.json(products)
    //     } else {
    //         next(err)
    //     }
    // });
    // Api
    // Product.find({})
    // .then((products) => res.json(products))
    // .catch((err) => next(err));
    Product.find({})
      .then((products) => {
        // products = products.map(products => products.toObject());
        res.render('home', {
          layout: 'website/main',
          products: mutipleMongooseToOject(products),
        });
      })
      .catch(next);
  }
  // [GET] /search
  search(req, res) {
    res.send('COURSE CREATE');
  }
}
module.exports = new HomeController();
