const { getUsers, getById, addUser, getByUsername } = require('../service');
const User = require('../../../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

async function get(req, res) {
  try {
    console.log(req.query);

    if (req.query.username) { // ?id=k1231 -> query paramet
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
<<<<<<< HEAD
    const oldUser = await User.findOne({ username });
=======
    const oldUser = await getByUsername( username );
>>>>>>> efad38515e019268c56d82b131339bb41e116d7d

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



module.exports = {
  get,
  register,

};