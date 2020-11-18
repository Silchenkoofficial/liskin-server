import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import PostController from './controllers/PostController';
const Post = new PostController();

const app = express();

const uri = 'mongodb://silchenko:Kakashka25091999@SG-liskin-39691.servers.mongodirector.com:27017/liskin';

mongoose.connect(uri, {
    sslValidate: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected!'));


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/orders', Post.index);
app.post('/orders', Post.create);
app.get('/orders/:id', Post.read);
app.delete('/orders/:id', Post.delete);
app.put('/orders/:id', Post.update);

app.listen(27017, () => {
    console.log('SERVER STARTED!');
});