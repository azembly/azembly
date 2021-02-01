const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.init = async (req, res) => {
    let user = null
    const userId = res.locals.userId
    if (userId) {
        user = await User.findById(userId)
    }
    res.send({
        user
    })
}

exports.login = async (req, res) => {
    const { email, password } = req.body.user;

    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) {
        return res.status(400).send({ error: "Invalid credentials" });
    }

    const equals = await bcrypt.compare(password, user.password);
    if (!equals) {
        return res.status(400).send({ error: "Invalid credentials" });
    }

    const { token } = await UserService.login(req, res, user);
    res.send({ token });
}

exports.register = async (req, res) => {
    const user = User({
        ...req.body
      });
      await user.save();
    
      res.sendStatus(201);
}