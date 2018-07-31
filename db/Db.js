
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints:['cassandra']});

function getRecords(query,callback){
    query = 'select key from '+query;
    client.execute(query,function(err,result){
        if(err){
            return callback(err);
        }
        console.log("result Found");
        return callback(null,result);
    });
}

exports.getRecords = getRecords ;