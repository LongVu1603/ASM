const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const route = require("./routes");

const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// const db = require("./config/db");

// // Connect to db
// db.connect();

// ++>

const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

try {
  mongoose.connect(process.env.MONGODB_URL, () => {});
  console.log("Connect successfully!!!");
} catch (err) {
  console.log("Connect failure!!!");
}

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//<++

app.use(express.static(path.join(path.resolve(), "/src/public")));

app.use(express.json());

// Teamplate engine
app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
// app.set("views", path.join(path.resolve(), "/src/resources/views/"));
app.set("views", path.join(__dirname, "resources", "views", ""));

// app.get("/", (req, res) => {
//   res.render("home");
// });

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

// Routes init
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
