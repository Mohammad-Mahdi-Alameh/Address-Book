const Contact = require('../../model/Contact');
const User = require('../../model/User');

async function getContacts(user) {
    return await User.findById(user).populate("contacts");
  }

async function getbyid(contact) {
    return await Contact.findById(contact);
  }

async function addContact(body) {
    const {
      first_name, last_name, phonenumber, email, latitude , longitude , relationship_status , user
    } = body;
  
    const contact = new Contact(body);
  
    return await contact.save();
  }


module.exports = {
 getContacts,
 addContact,
 getbyid
  }
  