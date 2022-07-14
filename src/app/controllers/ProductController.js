class ProductController {
  show(req, res) {
    res.render("product-detail", {
      layout: "web/main",
    });
  }
}
module.exports = new ProductController();
