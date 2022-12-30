const express = require("express");
const app = express()
require("dotenv").config();
const connection = require("./helper/connection");
const userRoutes = require("../Server/Routers/user-router");

const PORT = process.env.PORT;
connection();

app.use('/user',userRoutes);

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})