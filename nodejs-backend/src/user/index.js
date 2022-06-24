const { Router } = require('express');
<<<<<<< HEAD
const { get } = require('./controller/user');
const router = Router();

router.get('/get',get);

=======
const { get , login, register} = require('./controller/user');
const router = Router();

router.get('/get',get);
router.post('/register', register);
>>>>>>> efad38515e019268c56d82b131339bb41e116d7d




module.exports = router;