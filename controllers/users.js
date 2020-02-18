var UserModule = require('../schema/user');
var md5 = require('md5');
var jwt = require('jsonwebtoken');

function UsersControls() {

}

UsersControls.prototype.get = function (req, res) {
    UserModule.find({}, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    }).select("-password");
}


UsersControls.prototype.getById = function (req, res) {
    UserModule.findOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    }).select("-password");
}

UsersControls.prototype.createOrUpdate = function (req, res) {
    if (req.params.id) {
        var id = req.params.id;
        delete req.body._id;
        UserModule.findOneAndUpdate({ _id: id }, req.body, { upsert: true, setDefaultsOnInsert: true }, function (err, result) {
            if (err) {
                res.send(err);
            } else {

                delete result.password;
                res.send(result);;
            }
        });

    } else {
        var data = req.body;
        data.password = md5(data.password);
        var users = new UserModule(data);
        users.save(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send({ message: "success" });
            }
        });
    }
}

UsersControls.prototype.deleteById = function (req, res) {
    UserModule.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
}

UsersControls.prototype.login = function (req, res) {
    UserModule.find({ username: req.body.username, password: md5(req.body.password), status: 'active' }, function (err, result) {
        if (err) {
            res.send(err);
        } else if (result.length === 0) {
            res.send({ status: 404, message: 'record not found' });
        } else {
            var token = jwt.sign(result[0].toJSON(), 'myapp', { expiresIn: 60 * 60 });
            var userInfo = {
                token: token,
                details: result[0]
            }
            res.send(userInfo);
        }
    }).select("-password");
}

module.exports = UsersControls;