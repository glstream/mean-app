var mongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/hotelData';

var _connection = null;

var open = function(){
    mongoClient.connect(dburl, function(err, db){
        if (err){
            console.log("DB cant connect");
            return;
        }
        _connection = db;
        console.log("DB connection open", db)
    });
    //set _connection
};

var get = function(){
    return _connection
};

module.exports = {
    open: open,
    get : get
};