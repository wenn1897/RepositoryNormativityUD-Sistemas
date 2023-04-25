"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// import {config} from 'dotenv'
// config(); //verifico si existe una variable de entorno: config() lee variables de entorno
require('dotenv').config();
console.log(process.env.DB_USER);
var _default = {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || 'wenn1897',
  dbPassword: process.env.DB_PASSWORD || 'wenn1897SQLL*',
  //'BDAnormas*',
  dbServer: process.env.DB_SERVER || 'localhost',
  dbName: process.env.DB_NAME || 'normatividad'
};
exports["default"] = _default;