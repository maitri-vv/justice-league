const express = require('express');
const router = express.Router();

// importing routers 
const newsletter = require('./Newsletter/index');


//newsletter routes 
router.use('/newsletter', newsletter);

// base root 
router.get('/', (req, res) => {
    res.send('Hello👋')
})

module.exports = router; 