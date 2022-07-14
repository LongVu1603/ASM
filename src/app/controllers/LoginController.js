const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let refreshTokens = [];

const LoginController = {
  index: (req, res) => {
    res.render("login", {
      layout: "web/main",
    });
  },
  //LOGIN
  // loginUser: async (req, res) => {
  //   try {
  //     const email = await User.findOne({ email: req.body.email });
  //     if (!email) {
  //       res.status(404).json("Incorrect username");
  //     }

  //     const validPassword = await bcrypt.compare(
  //       req.body.password,
  //       email.password
  //     );

  //     if (!validPassword) {
  //       res.status(404).json("Incorrect password");
  //     }

  //     if (user && validPassword) {
  //       //Generate access token
  //       const accessToken = authController.generateAccessToken(email);
  //       //Generate refresh token
  //       const refreshToken = authController.generateRefreshToken(email);
  //       refreshTokens.push(refreshToken);
  //       //STORE REFRESH TOKEN IN COOKIE
  //       res.cookie("refreshToken", refreshToken, {
  //         httpOnly: true,
  //         secure: false,
  //         path: "/",
  //         sameSite: "strict",
  //       });

  //       // const { password, ...others } = email._doc;
  //       // return;
  //       res.status(200).json({ ...others, accessToken, refreshToken });
  //     }
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },

  loginUser: async (req, res) => {
    // Our login logic starts here
    try {
      // Get user input
      const { email, password } = req.body;

      // Validate user input
      // if (!(email && password)) {
      //   res.status(400).send("All input is required");
      // }
      // Validate if user exist in our database
      const user = await User.findOne({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        return res.status(200).json({
          message: "Login Successful",
          token: jwt.sign(
            {
              email: user.email,
              username: user.username,
              _id: user._id,
            },
            "verySecretValue",
            { expiresIn: "30d" }
          ),
        });
      }

      // res.status(400).json({ data: "Incorrect account or password" });
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  },

  //login
  // loginUser: async (req, res) => {
  //   var username = req.body.username;
  //   var password = req.body.password;

  //   User.findOne({ $or: [{ email: username }, { phone: username }] })
  //   .then((user) => {
  //     if (user) {
  //       bcrypt.compare(password, user.password, function (err, result) {
  //         if (err) {
  //           res.json({
  //             error: err,
  //           });
  //         }

  //         if (result) {
  //           let token = jwt.sign({ name: user.name }, "verySecretValue", {
  //             expiresIn: "1h",
  //           });
  //           res.json({
  //             message: "Login Successful",
  //             token,
  //           });
  //         } else {
  //           res.json({
  //             message: "password does not matched ",
  //           });
  //         }
  //       });
  //     } else {
  //       res.json({
  //         message: "no user found",
  //       });
  //     }
  //   });
  // },
};

module.exports = LoginController;
