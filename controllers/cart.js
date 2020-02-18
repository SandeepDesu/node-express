var CartModule = require('../schema/cart');

function CartController() {

}

CartController.prototype.get = function (req, res) {
    CartModule.find({}, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
};


CartController.prototype.getById = function (req, res) {
    CartModule.findOne({ userId: req.params.id, status: 'active' }, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
};

CartController.prototype.createOrUpdate = function (req, res) {
    if (req.params.id || req.body._id) {
        var id = req.params.id || req.body._id;
        var totalcost = 0;
        var totalItems = 0;
        for (var i = 0; i < req.body.orders.length; i++) {
            totalcost += parseInt(req.body.orders[i].cost, 10) * parseInt(req.body.orders[i].quantity, 10);
            totalItems += parseInt(req.body.orders[i].quantity, 10);
        }
        req.body.totalPrice = totalcost;
        req.body.totalItems = totalItems;
        delete req.body._id;
        CartModule.findOneAndUpdate({ _id: id }, req.body, { upsert: true, setDefaultsOnInsert: true }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                var data = Object.assign({}, result._doc, req.body);
                res.send(data);;
            }
        });
    } else {
        var totalcost = 0;
        var totalItems = 0;
        for (var i = 0; i < req.body.orders.length; i++) {
            totalcost += parseInt(req.body.orders[i].cost, 10) * parseInt(req.body.orders[i].quantity, 10);
            totalItems += parseInt(req.body.orders[i].quantity, 10);
        }
        req.body.totalPrice = totalcost;
        req.body.totalItems = totalItems;
        var order = new CartModule(req.body);
        order.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.send(req.body);
            }
        });
    }
};

CartController.prototype.deleteById = function (req, res) {
    CartModule.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

CartController.prototype.search = function (req, res) {
    res.send({ message: "Implementation in progress" });
};


module.exports = CartController;