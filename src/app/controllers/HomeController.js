class HomeController {
  // [GET] /
  index(req, res, next) {
    res.render("home", {
      layout: "web/main",
    });
  }
}
module.exports = new HomeController();
