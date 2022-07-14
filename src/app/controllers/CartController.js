class CartController {
  // [GET] /
  index(req, res, next) {
    res.render("cart", {
      layout: "web/main",
    });
  }
}
module.exports = new CartController();
