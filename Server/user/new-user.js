const user = require("../models/registerModel");

async function register(req, res){
    console.log("Reached Inside Register Route");
    try{
        const {name, username, password } = req.body; // input from user
        if(!(name && username && password)){
            res.status(200);
            res.send("all input required");
        }

        const oldUser = await user.findOne({username});
        if(oldUser){
            return (res.status(409),
                res.send("Already Register username please login"));
        }

        const Createuser = await user.create({
            name,
            username,
            password
        });
        console.log("Created the Data"); 
        res.status(201).json(Createuser);
    }catch(err){
        res.status(200);
        console.log("Error in Register route:", err.message);
    }
}

module.exports = register;