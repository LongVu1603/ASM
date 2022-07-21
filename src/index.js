const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const route = require("./routes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Connect to db
dotenv.config();

try {
  mongoose.connect(process.env.MONGODB_URL, () => {});
  console.log("Connect successfully!!!");
} catch (err) {
  console.log("Connect failure!!!");
}

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());
app.use(express.json());

// http logger
app.use(morgan("combined"));

// Teamplate engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
// app.engine('handlebars', handlebars.engine());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
