'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _PostController = require('./controllers/PostController');

var _PostController2 = _interopRequireDefault(_PostController);

var _CourierController = require('./controllers/CourierController');

var _CourierController2 = _interopRequireDefault(_CourierController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = new _PostController2.default();
var Courier = new _CourierController2.default();

var app = (0, _express2.default)();

var uri = 'mongodb://silchenko:Kakashka25091999@SG-liskin-39691.servers.mongodirector.com:27017/liskin';

_mongoose2.default.connect(uri, {
    sslValidate: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    return console.log('MongoDB connected!');
});

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.get('/orders', Post.index);
app.post('/orders', Post.create);
app.get('/orders/:id', Post.read);
app.delete('/orders/:id', Post.delete);
app.put('/orders/:id', Post.update);

app.get('/couriers', Courier.index);
app.post('/couriers', Courier.create);
app.get('/couriers/:id', Courier.read);
app.delete('/couriers/:id', Courier.delete);
app.put('/couriers/:id', Courier.update);

app.listen(27017, function () {
    console.log('SERVER STARTED!');
});