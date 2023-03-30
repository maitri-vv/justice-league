const express = require('express'); 

const app = express(); 
const bodyParser = require("body-parser")

const cors = require('cors'); 
//middlewares 
app.use(express.json());  

app.use(cors()); 

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


const routes = require('./routes/index'); 

app.use('/',routes)



module.exports = app;  