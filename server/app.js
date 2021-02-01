const express = require("express");
const { ParseToken } = require("./middleware/ParseToken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const path = require("path");
config ({
    path:path.join(__dirname, "./.env")
})

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, () => console.log("connected to mongodb"))

const app = express();
app.use(bodyParser.json())
app.use(ParseToken)
app.set("view engine", "ejs")
app.use(require("./routes"))

module.exports = app