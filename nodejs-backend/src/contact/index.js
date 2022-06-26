const { Router } = require('express');
const { get , add , getByID,edit ,remove , getLocation} = require('./controller/ContactController');
const router = Router();

router.get('/get',get);
router.post('/add',add);
router.get('/get_contact',getByID);
// router.post('/edit',edit);
// router.post('/remove',remove);
// router.get('/getLocation',getLocation);


module.exports = router;