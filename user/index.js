const User = require("../../model/user");
const bcrypt = require('bcryptjs');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const app = express();
app.use(cors());
app.use(express.json());

//Register
app.post("/register", async (req, res) => {

    try {
      // Get user input
      const { first_name, last_name, username, password } = req.body;
  
      // Validate user input
      if (!(username && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ username });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        username: username.toLowerCase(), // sanitize: convert username to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, username },
       TOKEN_SECRET,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
  

