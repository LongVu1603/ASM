const _productRouter_ = require('./_product_');
const productRouter = require('./product');
const homeRouter = require('./home');

function route(app) {
  app.use('/admin/products', productRouter);
  app.use('/products', _productRouter_);

  app.use('/', homeRouter);
}

module.exports = route;
