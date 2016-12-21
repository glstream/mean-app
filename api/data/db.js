var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/meanhotel';


mongoose.connect(dburl);

mongoose.connection.on('connected', function(){
    console.log("Mongoose conneted to "+ dburl);
});
mongoose.connection.on('disconnected', function(){
    console.log("Mongoose disconnected from "+ dburl);
});
mongoose.connection.on('error', function(err){
    console.log("Mongoose connetion error "+ err);
});


// bring in schema and models
require('./hotels.model.js');