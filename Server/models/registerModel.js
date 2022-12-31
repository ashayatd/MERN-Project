const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
    name: {type:String, default:null},
    username: {type:String, default:null},
    password: {type:String, default:null},
    token: {type:String}
})

module.exports = mongoose.model("registerUser", registerSchema);