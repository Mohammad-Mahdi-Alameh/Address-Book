const User = require('../../model/User');

async function getUsers() {
  return await User.find();
}

async function getById(id) {
  return await User.findById(id);
}

async function addUser(body, hashPassword) {
  const {
    first_name,
    last_name,
    username,
    password
  } = body;

  const user = new User({
    first_name,
    last_name,
    username,
    password: hashPassword,
  });

  return await user.save();
}

async function getByUsername(username) {
  return await User.findOne({
    username
  });
}

module.exports = {
  getUsers,
  getById,
  addUser,
  getByUsername,
}