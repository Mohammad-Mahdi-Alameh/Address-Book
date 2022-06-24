const { Router } = require('express');
const { login, register} = require('./controller/AuthController');
const { get } = require('./controller/UserController');
const router = Router();

router.get('/get',get);
router.post('/register', register);
router.post('/login', login);



module.exports = router;