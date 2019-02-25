const express = require("express");
const api = require("./routes/api_v1");

var app = express();

app.use("/v1", api);

app.get("/", function(req, res, next){
   res.end("Hello, and welcome to the MathFun server!");
   next();
});

app.get("/help", function(req, res){
   res.end("Need help? Please see https://github.com/Luiserebii/MathFun-Server for the source!")
});






module.exports = app;
