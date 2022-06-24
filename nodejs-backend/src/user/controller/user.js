const { getUsers, getById, addUser, getByUsername } = require('../service');
const User = require('../../../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

async function get(req, res) {
  try {
    console.log(req.query);

    if (req.query.username) { 
      const id = req.query.username;
      const result = await getByUsername(id);
      console.log('result of specific user =>', result);
      return res.send(result);
    }

    const result = await getUsers();
    console.log('result =>', result);

    return res.send(result);
  } catch (error) {
    console.log(error);
  }
}

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
      username, // sanitize: convert email to lowercase
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
    if (!user) return res.status(400).send('invalid credentials');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('invalid credentials');

    const token = jwt.sign(
      {_id: user._id, first_name: user.first_name,last_name: user.last_name, username: user.username},
      TOKEN_SECRET
    );

    return res.header('auth-token', token).send(token);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  get,
  register,
  login,
};