var BookModule = require('../schema/book');

function BookController() {

}

BookController.prototype.get = function (req, res) {
    BookModule.find({}, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
};


BookController.prototype.getById = function (req, res) {
    BookModule.findOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
};

BookController.prototype.createOrUpdate = function (req, res) {
    if (req.params.id) {
        var id = req.params.id;
        delete req.body._id;
        BookModule.findOneAndUpdate({ _id: id }, req.body, { upsert: true, setDefaultsOnInsert: true }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                var data = Object.assign({}, result._doc, req.body);
                res.send(data);;
            }
        });
    } else {
        var book = new BookModule(req.body);
        book.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.send({ message: "success" });
            }
        });
    }
};

BookController.prototype.deleteById = function (req, res) {
    BookModule.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

BookController.prototype.search = function (req, res) {
    res.send({ message: "Implementation in progress" });
};


module.exports = BookController;