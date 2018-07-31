"use strict"; 
var express = require('express');
var router = express.Router();
var db = require('../../db/Db.js');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ',req.url)
  next()
})
// define the home page route
router.get('/vivek', function (req, res,next) {
    db.getRecords('system.local',function(err,result){
        if(err){
            next(err);
        }else{
            res.send({"result":process.pid,"db":result})     
        }
       
    });

})

router.use(function (err, req, res, next) {
    //console.error(err.stack)
    res.status(500).send(err);
})

module.exports = router