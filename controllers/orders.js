var OrderModule = require('../schema/order');
var CartModel = require('../schema/cart');
function OrderController() {

}

OrderController.prototype.get = function (req, res) {
    OrderModule.find({}, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
};


OrderController.prototype.getById = function (req, res) {
    OrderModule.findOne({ userId: req.params.id }, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
};

OrderController.prototype.createOrUpdate = function (req, res) {
    if (req.params.id) {
        var id = req.params.id;
        delete req.body._id;
        OrderModule.findOneAndUpdate({ _id: id }, req.body, { upsert: true, setDefaultsOnInsert: true }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);;
            }
        });
    } else {
        var order = new OrderModule(req.body);
        order.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                CartModel.findOneAndUpdate({ _id: req.body.cartId }, { status: 'InActive' }, { upsert: true, setDefaultsOnInsert: true },
                    function (err) {
                        if (err) {
                            res.send({ message: "success" });
                        } else {
                            res.send({ message: "success" });
                        }
                    });
            }
        });
    }
};

OrderController.prototype.deleteById = function (req, res) {
    OrderModule.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

OrderController.prototype.search = function (req, res) {
    res.send({ message: "Implementation in progress" });
};


module.exports = OrderController;