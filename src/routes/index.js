const homeRouter = require("./home");
const adminRouter = require("./admin");
const privacyRouter = require("./privacy");
const registerRouter = require("./register");
const loginRouter = require("./login");
const cartRouter = require("./cart");
const detailRouter = require("./product");

function route(app) {
  app.use("/admin", adminRouter);

  app.use("/", homeRouter);

  app.use("/product-detail", detailRouter);
  app.use("/register", registerRouter);
  app.use("/login", loginRouter);
  app.use("/cart", cartRouter);
  app.use("/privacy", privacyRouter);

  // app.get("/admin", (req, res) => {
  //   res.render("dashboard");
  // });

  // app.get("/register", (req, res) => {
  //   res.render("register");
  // });

  // app.get("/login", (req, res) => {
  //   res.render("login");
  // });

  // app.get("/Privacy", (req, res) => {
  //   res.render("Privacy");
  // });
}

module.exports = route;
