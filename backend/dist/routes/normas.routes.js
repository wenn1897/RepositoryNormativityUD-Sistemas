"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _normas = require("../controllers/normas.controllers");
var router = (0, _express.Router)();
router.get('/normas', _normas.getNormas);
router.get('/normas/:id', _normas.getNormasById);
router.post('/search', _normas.getByWordKey);
router.post('/normas', _normas.createNewNorma);
router.put('/normas/:id', _normas.updateValidityNorma);
var _default = router;
exports["default"] = _default;