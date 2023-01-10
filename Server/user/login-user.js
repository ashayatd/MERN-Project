const user = require(`../models/userModel`);
const bcrypt = require("bcryptjs");


const login = async (req, res)=>{
    try{
        const {username, password} = req.body;

        if(!username || !password){
            return res.status(409).json({Error:"Please Fill the Data"})
        }

        const userLogin = await user.findOne({username});
        console.log(userLogin);
        if(!userLogin){
            return res.status(409).json({message: "User Not Found"})
        }
        const isMatch = bcrypt.compare(password, userLogin.password);
        const token   = await userLogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken", token,{
            expires:new Date(Date.now() + 2589200000),
            httpOnly:true
        });
        if(!isMatch){
            res.status(409).json({message:"Invalid Credentials"});
        }
        else{
            res.status(200).json({message:"User signin Successfully"});
        }
    }
    catch(err){
        console.log("error: ", err.message);
    }
} 

module.exports = login; 