import CourierModel from '../models/Courier';

class CourierController {

    index(req, res) {

        CourierModel.find().then((err, posts) => {
            if(err) {
                return res.send(err);
            }
    
            res.json(posts);
        });
    }

    create(req, res) {

        const data = req.body;
    
        const courier = new CourierModel({
            "_id": data._id,
            "firstName": data.firstName,
            "lastName": data.lastName,
            "telephone": data.telephone,
            "activeOrders": data.activeOrders,
            "completeOrders": data.completeOrders
        });
        
        courier.save().then(() => {
            res.send({status: 'ok'});
        });
    
    }

    read(req, res) {
        CourierModel.findOne({_id: req.params.id}).then((post) => {
            if (!post) {
                res.send({error: "not found"});
            } else {
                res.json(post);
            }
        });
    }
    
    update(req, res) {
        CourierModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, (err) => {
            if (err) {
                return res.send(err);
            }
            res.json({status: 'updated'});
        });
    }

    delete(req, res) {
        CourierModel.remove({
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

export default CourierController;