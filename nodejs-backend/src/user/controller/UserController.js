const { getUsers,  getByUsername } = require('../service');
const User = require('../../../model/User');
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

module.exports = {
  get
  };




