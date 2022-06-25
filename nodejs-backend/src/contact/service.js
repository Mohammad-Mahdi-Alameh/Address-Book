const Contact = require('../../model/Contact');
const User = require('../../model/User');

async function getContacts(user) {
    return await User.findById(user).populate("contacts");
  }

async function addContact(body) {
    const {
      first_name, last_name, phonenumber, email, location , relationship_status , user
    } = body;
  
    const contact = new Contact(body);
  
    return await contact.save();
  }

module.exports = {
 getContacts,
 addContact
  }
  