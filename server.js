const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var securePin = require("secure-pin");
var cors = require('cors');
const methodOverride = require('method-override');

app.use(bodyParser.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded())
app.use(methodOverride());
app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.get('/', function(req, res, next) {
	var arr = []
for (i=0; i<1000; ++i){
     var pin = securePin.generatePinSync(4);
    arr.push(pin)
   };

   res.send(arr)
 });

app.listen(3001,function(){
    console.log('server running on 3001')
})