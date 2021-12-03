var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/sushishop');
//var indexRouter = require('./routes/index');
var boxesRouter = require('./routes/boxes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req,res,next){
    req.db = db;
    next();
  });

//app.use('/', indexRouter);
app.use('/boxes', boxesRouter);

module.exports = app;
