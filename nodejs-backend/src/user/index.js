const { Router } = require('express');
const { get , login, register} = require('./controller/user');
const router = Router();

router.get('/get',get);
router.post('/register', register);




module.exports = router;