"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Courier = require("../models/Courier");

var _Courier2 = _interopRequireDefault(_Courier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CourierController = function () {
    function CourierController() {
        _classCallCheck(this, CourierController);
    }

    _createClass(CourierController, [{
        key: "index",
        value: function index(req, res) {

            _Courier2.default.find().then(function (err, posts) {
                if (err) {
                    return res.send(err);
                }

                res.json(posts);
            });
        }
    }, {
        key: "create",
        value: function create(req, res) {

            var data = req.body;

            var courier = new _Courier2.default({
                "_id": data._id,
                "firstName": data.firstName,
                "lastName": data.lastName,
                "telephone": data.telephone,
                "activeOrders": data.activeOrders,
                "completeOrders": data.completeOrders
            });

            courier.save().then(function () {
                res.send({ status: 'ok' });
            });
        }
    }, {
        key: "read",
        value: function read(req, res) {
            _Courier2.default.findOne({ _id: req.params.id }).then(function (post) {
                if (!post) {
                    res.send({ error: "not found" });
                } else {
                    res.json(post);
                }
            });
        }
    }, {
        key: "update",
        value: function update(req, res) {
            _Courier2.default.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, function (err) {
                if (err) {
                    return res.send(err);
                }
                res.json({ status: 'updated' });
            });
        }
    }, {
        key: "delete",
        value: function _delete(req, res) {
            _Courier2.default.remove({
                _id: req.params.id
            }).then(function (post) {
                if (post) {
                    res.json({ status: 'deleted' });
                } else {
                    res.json({ status: 'error' });
                }
            });
        }
    }]);

    return CourierController;
}();

exports.default = CourierController;