var express = require('express');
const { login, register, current } = require('../controllers/user');
var router = express.Router();

/* api/user/login */
router.post('/login', login);

/* api/user/register */
router.post('/register', register);

/* api/user/current */
router.get('/current', current);

module.exports = router;
