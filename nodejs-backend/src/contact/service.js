const Contact = require('../../model/Contact');
const User = require('../../model/User');

async function getContacts(user) {
    return await User.findById(user).populate("contacts");
  }

module.exports = {
 getContacts
  }