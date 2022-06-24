const { getContacts } = require('../service');
async function get(req, res) {
    try {
      console.log(req.query);
  
        const user = req.query.user;
        const result = await getContacts(user);
        console.log('result  =>', result.contacts);
        return res.send(result.contacts);
    //   }
  
    //   const result = await getUsers();
    //   console.log('result =>', result);
  
    } catch (error) {
      console.log(error);
    }
  }
  
  module.exports = {
    get
    };