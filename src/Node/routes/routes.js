var express = require('express');
var {register,login} =require( '../controller/usercontroller')
const router = express.Router();

router.post('/register',register)
router.post('/login',login)

module.exports = router;