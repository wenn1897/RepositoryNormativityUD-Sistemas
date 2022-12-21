"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _config = _interopRequireDefault(require("./config"));
var _normas = _interopRequireDefault(require("./routes/normas.routes"));
var express = require('express');
var morgan = require('morgan');
var app = express();

//Settings
app.set('port', _config["default"].port || 3000);
app.set('json spaces', 2);
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Middlewares
app.use(express.json()); // para que mi servidor entienda este formato
app.use(morgan('dev')); //informacion por consola sobre lo que pasa con el servidor
app.use(express.urlencoded({
  extended: false
})); //recibe datos que vienen desde form html

//Routers
app.use(_normas["default"]);

//Starting server
app.listen(app.get('port'), function () {
  console.log('server on port' + app.get('port'));
});