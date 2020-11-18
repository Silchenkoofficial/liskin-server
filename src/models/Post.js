import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
    "address": [
        {
            "text": String,
            "timeFrom": String,
            "timeTo": String,
            "telephone": String
        },
        {
            "text": String,
            "timeFrom": String,
            "timeTo": String,
            "telephone": String
        }
    ],
    "weight": Number,
    "product": String,
    "price": Number,
    "isBooked": Boolean
});

const Post = mongoose.model('order', PostSchema);

export default Post;