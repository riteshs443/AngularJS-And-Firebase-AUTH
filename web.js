var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var nodemailer = require("nodemailer");
var app = express();


app.use(function(req,res,next){
    if (req.url == "/") {
    res.header("Pragma", "no-cache");
    }
    next();
});

app.use(function(req,res,next){
    if (req.url.indexOf('.html') != -1) {
    res.header("Pragma", "no-cache");
    }
    next();
});

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000); 
