const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.init = async (req, res) => {
    console.log("test")
    let user = null
    const userId = res.locals.userId
    if (userId) {
        user = await User.findById(userId)
    }
    res.send({
        user
    })
}

exports.initAdmin = async (req, res) => {
    console.log("test")
    let user = null
    const userId = res.locals.userId
    if (userId) {
        user = await User.findById(userId)
        if(user.role!=="Admin") {
            user=null
        }
    }
    res.send({
        user
    })
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) {
        return res.status(400).send({ error: "Invalid credentials" });
    }

    const equals = await bcrypt.compare(password, user.password);
    if (!equals) {
        return res.status(400).send({ error: "Invalid credentials" });
    }

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
    console.log(token);
    res.send({ token });
}

exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) {
        return res.status(400).send({ error: "Invalid credentials" });
    }

    const equals = await bcrypt.compare(password, user.password);
    if (!equals) {
        return res.status(400).send({ error: "Invalid credentials" });
    }

    if (user.role!=="Admin") {
        return res.status(400).send({ error: "Ugyldig login" });
    }

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
    console.log(token);
    res.send({ token });
}

exports.register = async (req, res) => {
    const user = User({
        ...req.body, 
        role: "User"
      });
      await user.save();
    
      res.sendStatus(201);
}