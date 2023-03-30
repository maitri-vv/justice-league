const express = require('express'); 
const router = express.Router(); 

//importing routes 
const getuser = require('./getUser');
router.use('/user',getuser); 

module.exports = router; 