var dbconn = require('../data/dbConnection.js');
var ObjectId = require('mongodb').ObjectId;
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res){


            var db = dbconn.get();
            var collection = db.collection('tech');
                var offset = 0;
                 var count = 5;

                if (req.query && req.query.offset) {
                     offset = parseInt(req.query.offset, 10);
                 }
                    if (req.query && req.query.count) {
                     count = parseInt(req.query.count, 10);
                 }
            collection
                .find()
                .skip(offset)
                .limit(count)
                .toArray(function(err, docs){
                    if (err){
                    console.log("hotels get error")
                    }
                    console.log("found the hotels", docs)
                res     
                    .status(200)
                    .json(docs);

                });
};

module.exports.hotelsGetOne = function(req, res){
            var db = dbconn.get();
            var collection = db.collection('tech');
            var hotelId = req.params.hotelId;
                console.log("Get hotelId", hotelId);
            collection  
                .findOne({
                    _id: ObjectId(hotelId)
                }, function(err, doc){
                    res
                .status(200)
                .json(doc);
                })
};

module.exports.hotelsAddOne = function(req, res) {
    var db = dbconn.get();
     var collection = db.collection('tech');
    console.log("POST new hotels, YAY")
    console.log(req.body)
    res 
        .status(200)
        .json(req.body);
};


