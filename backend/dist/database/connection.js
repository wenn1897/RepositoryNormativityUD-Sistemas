"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = getConnection;
Object.defineProperty(exports, "sql", {
  enumerable: true,
  get: function get() {
    return _mssql["default"];
  }
});
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mssql = _interopRequireDefault(require("mssql"));
var _config = _interopRequireDefault(require("../config"));
var dbSettings = {
  user: _config["default"].dbUser,
  password: _config["default"].dbPassword,
  server: _config["default"].dbServer,
  databases: _config["default"].dbName,
  options: {
    encrypt: true,
    // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};
function getConnection() {
  return _getConnection.apply(this, arguments);
} //getConnection();
function _getConnection() {
  _getConnection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log("Conectando...");
            _context.next = 4;
            return _mssql["default"].connect(dbSettings);
          case 4:
            pool = _context.sent;
            return _context.abrupt("return", pool);
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log("No se pudo establecer la conexión");
            console.error(_context.t0);
          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getConnection.apply(this, arguments);
}