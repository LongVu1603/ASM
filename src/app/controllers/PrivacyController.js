class PrivacyController {
  index(req, res) {
    res.render("privacy", {
      layout: "web/main",
    });
  }
}
module.exports = new PrivacyController();
