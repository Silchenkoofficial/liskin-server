"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CourierSchema = new _mongoose.Schema({
    "_id": String,
    "firstName": String,
    "lastName": String,
    "telephone": String,
    "activeOrders": Array,
    "completeOrders": Array
});

var Courier = _mongoose2.default.model('courier', CourierSchema);

exports.default = Courier;