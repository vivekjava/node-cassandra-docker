"use strict"; 
var express = require("express");
var cookie = require('cookie-parser');
var multer = require("multer");
var body = require("body-parser");
var app = express();
var port = 8000;

// Module's


// initial level of scaling
const os = require('os');
const cpu = os.cpus().length ;
const cluster = require('cluster');

if(cluster.isMaster){

    console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < cpu; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
    
}else{
    const account = require('./router/account/index');
    app.all('/',function(req,res,next){
        console.log("Request Identified");
        next();
    });
    app.use('/account',account);
    app.use(function (err, req, res, next) {
        //console.error(err.stack)
        res.status(500).send(err);
    })
    
    var server = app.listen(port,function() {    
        console.log("Server Started in port : "+port);
    });
    
}
