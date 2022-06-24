const { Router } = require('express');
const { getContacts , add , edit , delete , getLocation} = require('./controller/ContactController');
const router = Router();

router.get('/get',getContacts);
router.post('/add',add);
router.post('/edit',edit);
router.post('/delete',delete);
router.get('/getLocation',getLocation);


module.exports = router;