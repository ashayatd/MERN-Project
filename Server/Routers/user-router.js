const express = require("express");
const routes = express.Router();

const register = require("../user/new-user");

routes.post("/register", register);

module.exports = routes;