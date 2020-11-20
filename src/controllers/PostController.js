import PostModel from '../models/Post';

class PostController {

    index(req, res) {

        PostModel.find().then((err, posts) => {
            if(err) {
                return res.send(err);
            }
    
            res.json(posts);
        });
    }

    create(req, res) {

        const data = req.body;
        console.log(data);
    
        const post = new PostModel({
            "address": [
                {
                    "text": data.address[0].text,
                    "timeFrom": data.address[0].timeFrom,
                    "timeTo": data.address[0].timeTo,
                    "telephone": data.address[0].telephone
                },
                {
                    "text": data.address[1].text,
                    "timeFrom": data.address[1].timeFrom,
                    "timeTo": data.address[1].timeTo,
                    "telephone": data.address[1].telephone
                }
            ],
            "weight": data.weight,
            "product": data.product,
            "price": data.price,
            "isBooked": data.isBooked
        });
        
        post.save().then(() => {
            res.send({status: 'ok'});
        });
    
    }

    read(req, res) {
        PostModel.findOne({_id: req.params.id}).then((post) => {
            if (!post) {
                res.send({error: "not found"});
            } else {
                res.json(post);
            }
        });
    }
    
    update(req, res) {
        PostModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, (err) => {
            if (err) {
                return res.send(err);
            }
            res.json({status: 'updated'});
        });
    }

    delete(req, res) {
        PostModel.remove({
            _id: req.params.id
        }).then((post) => {
            if (post) {
                res.json({status: 'deleted'});
            } else {
                res.json({status: 'error'});
            }
        });
    }
}

export default PostController;