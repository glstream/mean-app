var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');


app.set('port', 3000);

app.use('/css',function(req, res, next){
    console.log("Page " + req.method+" "+ req.url+" was accesed" );
    next();
})
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false}))

app.use('/api', routes);

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Magic port number " + port);
});


