var jwt = require('jsonwebtoken');

exports.userAuth = function (req, res, next) {
    if (!req.query.auth) {
        if (req.headers['x-access-token']) {
            jwt.verify(req.headers['x-access-token'], 'myapp', function (err, decoded) {
                if (err) {
                    res.send('token expired');
                } else {
                    next();
                }
            });
        } else {
            res.send('Please provide valid token');
        }
    } else {
        next();
    }
}

exports.adminAuth = function (req, res, next) {
    if (!req.query.auth) {
        if (req.headers['x-access-token']) {
            jwt.verify(req.headers['x-access-token'], 'myapp', function (err, decoded) {
                if (err) {
                    res.send('token expired');
                } else {
                    if (decoded.role === 'admin') {
                        next();
                    } else {
                        res.send("To do this operation you don't have permission");
                    }
                }
            });
        } else {
            res.send('Please provide valid token');
        }
    } else {
        next();
    }
}