import mongoose, { Schema } from 'mongoose';

const CourierSchema = new Schema({
    "_id": String,
    "firstName": String,
    "lastName": String,
    "telephone": String,
    "activeOrders": Array,
    "completeOrders": Array
});

const Courier = mongoose.model('courier', CourierSchema);

export default Courier;