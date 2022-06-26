const { getContacts ,addContact,getbyid } = require('../service');
const User = require('../../../model/User');

async function getByID(req, res) {
  try {
      const id = req.query.id;
      const result = await getbyid(id);
    console.log('result =>', result);

    return res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function get(req, res) {
    try {
      console.log(req.query);
  
        const user = req.query.user;
        const result = await getContacts(user);
        console.log('result  =>', result.contacts);
        return res.send(result.contacts);

  
    } catch (error) {
      console.log(error);
    }
  }

  async function add(req, res) {
    try {
      console.log(req.body);
  
      const { first_name, last_name, phonenumber, email, location , relationship_status , user } = req.body;

    // Validate user input
    if (!(phonenumber && email && location && relationship_status && user && first_name && last_name)) {
      res.status(400).send("All input is required");
    }
  
      const newContact = await addContact(req.body);
      console.log('newContact =>', newContact);
  
      const updateUser = await User.updateOne(
        {
          _id: newContact.user
        },
        {
          $push: {
            contacts: newContact._id
          }
        }
      );
      console.log('updateUser =>', updateUser);
  
      return res.status(200).send(newContact); // 200
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  
  module.exports = {
    get ,
    add,
    getByID
    };