"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateValidityNorma = exports.getNormasById = exports.getNormas = exports.getByWordKey = exports.createNewNorma = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection");
var _querys = require("../database/querys");
var getNormas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _connection.getConnection)();
          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_querys.queries.getAllNormas);
          case 6:
            result = _context.sent;
            console.log(result);
            res.json(result.recordset);
            _context.next = 15;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);
          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getNormas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getNormas = getNormas;
var createNewNorma = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, id, numero_norma, tipo_norma, tema, actor, fecIni, fecFin, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, id = _req$body.id, numero_norma = _req$body.numero_norma, tipo_norma = _req$body.tipo_norma, tema = _req$body.tema, actor = _req$body.actor, fecIni = _req$body.fecIni, fecFin = _req$body.fecFin;
            _context2.next = 4;
            return (0, _connection.getConnection)();
          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input("id", _connection.sql.Int, id).input("numero_norma", _connection.sql.VarChar, numero_norma).input("tipo_norma", _connection.sql.Int, tipo_norma).input("tema", _connection.sql.VarChar, tema).input("actor", _connection.sql.VarChar, actor).input("fecha_inicio", _connection.sql.VarChar, fecIni).input("fecha_final", _connection.sql.VarChar, fecFin).query(_querys.queries.addNewNorma);
          case 7:
            result = _context2.sent;
            console.log("resultado: ", result); //respuesta de la base de datos
            res.json('Norma creada');
            //res.json(id, numero_norma, tema, actor, fecIni, fecFin)
            _context2.next = 16;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            res.status(500);
            res.send(_context2.t0.message);
          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function createNewNorma(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createNewNorma = createNewNorma;
var getNormasById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return (0, _connection.getConnection)();
          case 4:
            pool = _context3.sent;
            _context3.next = 7;
            return pool.request().input("id", _connection.sql.Int, id).query(_querys.queries.getNormaById);
          case 7:
            result = _context3.sent;
            res.json(result.recordset[0]);
            _context3.next = 15;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            res.status(500);
            res.send(_context3.t0.message);
          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function getNormasById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getNormasById = getNormasById;
var updateValidityNorma = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, fecFin, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            fecFin = req.body.fecFin;
            _context4.next = 5;
            return (0, _connection.getConnection)();
          case 5:
            pool = _context4.sent;
            _context4.next = 8;
            return pool.request().input("id", _connection.sql.Int, id).input("fecFin", _connection.sql.VarChar, fecFin).query(_querys.queries.updateNormaById);
          case 8:
            result = _context4.sent;
            res.json(result);
            _context4.next = 16;
            break;
          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            res.status(500);
            res.send(_context4.t0.message);
          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function updateValidityNorma(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateValidityNorma = updateValidityNorma;
var getByWordKey = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var name, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            name = req.body.name;
            console.log(name + "aaaaaaaaaa");
            _context5.next = 5;
            return (0, _connection.getConnection)();
          case 5:
            pool = _context5.sent;
            _context5.next = 8;
            return pool.request().input("name", _connection.sql.VarChar, name).query(_querys.queries.getNormaByName);
          case 8:
            result = _context5.sent;
            res.json(result);
            console.log('query:' + _querys.queries.getNormaByName);
            _context5.next = 17;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            res.status(500);
            res.send(_context5.t0.message);
          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 13]]);
  }));
  return function getByWordKey(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getByWordKey = getByWordKey;