const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = mongoose.Schema({    
    email: String,
    username: String,
    password: String,
    role: String,
    age: Number,
    country: String
},
{ timestamps:true});

UserSchema.pre("save", async function(next){
    const user = this
    if(!user.isModified("password")) {
        return next()
    }
    user.password = await bcrypt.hash(user.password, 10)
    next()
})

const User = mongoose.model("User", UserSchema, "users");
module.exports = User