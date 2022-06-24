const { Router } = require('express');
const { get } = require('./controller/user');
const router = Router();

router.get('/get',get);





module.exports = router;