var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes');
var app = express();
mongoose.connect('url',
{ useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, HEAD");
    res.header("Access-Control-Allow-Headers", "Origin, x-access-token, Content-Type, Accept, Authorization");
    next();
});

app.use(routes);
app.listen(8000);