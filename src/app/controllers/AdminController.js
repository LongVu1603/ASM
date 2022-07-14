const {
  mongooseToObject,
  mutipleMongooseToOject,
} = require("../../util/mongoose");

class AdminController {
  // [GET] /
  index(req, res, next) {
    res.render("dashboard", {
      layout: "admin/main",
    });
  }
}
module.exports = new AdminController();
