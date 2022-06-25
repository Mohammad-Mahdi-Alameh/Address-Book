const { getByUsername } = require('../service');
const User = require('../../../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";


async function register(req, res) {
  try {
    // Get user input
    const { first_name, last_name, username, password } = req.body;

    // Validate user input
    if (!(username && password && first_name && last_name)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await getByUsername( username );

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      username:username.toLowerCase(), 
      password: encryptedPassword
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, username },
      process.env.TOKEN_SECRET,
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
}

async function login(req, res) {
  try {
    const user = await getByUsername(req.body.username);
    if (!user) return res.status(400).send('Incorrect Username or Password !');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Incorrect Username or Password !');

    const token = jwt.sign(
      {_id: user._id, first_name: user.first_name,last_name: user.last_name, username: user.username},
      TOKEN_SECRET
    );
    let data={
      "success":true,
      "token":token,
      "user_id":user._id
     }
    return res.header('auth-token', token).send(data);
    // return res.header('auth-token', token).send(user._id);
    // return  res.status(201).json(user._id);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  register,
  login,
};