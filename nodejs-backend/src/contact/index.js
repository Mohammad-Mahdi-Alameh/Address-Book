const { Router } = require('express');
const { get , add , edit , getLocation} = require('./controller/ContactController');
// const { getContacts } = require('./service');
const router = Router();

router.get('/get',get);
// router.post('/add',add);
// router.post('/edit',edit);
// router.get('/getLocation',getLocation);


module.exports = router;