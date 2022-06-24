const User = require('../../model/User');

async function getUsers() {
  return await User.find();
}

async function getById(id) {
  return await User.findById(id);
}


async function getByUsername(username) {
  return await User.findOne({
    username
  });
}

module.exports = {
  getUsers,
  getById,
  getByUsername,
}