let express = require("express");
let route = express.Router();
let csvRouter = require("./csvhandler.route");

route.use("/csv", csvRouter);

module.exports = route;
