var User = require('../model/userModel')

module.exports = {
    newUser: (req, res, next) => {
        var username = req.body.username;
        var password = req.body.password;
        var email = req.body.email;

        var user = new User({
            username: username,
            password: password,
            email: email,
        }).save()

        return res.send({ message: "Added user successfully"})
    }
}