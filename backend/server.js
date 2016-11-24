var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// q
mongoose.Promise = require('q').Promise;


// middle ware

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "Content-Type,Authorization");
    next();
});
// mongo models
var Message = mongoose.model('Message', {
    msg: String
});

// mongo db connection

mongoose.connect('mongodb://test:test@ds013918.mlab.com:13918/iot', function (err, db) {
    if (!err) {
        console.log('connected to mongo');
    }
});

// functions
function getMessages(req,res) {
    Message.find({}).exec(function (err, result) {
        res.send(result);
    });
}

// API

app.get('/api/message',getMessages );




app.post('/api/message', function (req, res) {
    console.log(req.body);
    var message = new Message(req.body);
    message.save();
    res.status(200);
});
var server = app.listen(5000, function () {
    console.log("listening on port" + server.address().port);
});
