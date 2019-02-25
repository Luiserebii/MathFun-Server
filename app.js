const express = require("express");
const api = require("./routes/api_v1");

var app = express();

app.use("/v1", api);


app.get("/", function(req, res){
   res.end("Hello, and welcome to the MathFun server!");
});

app.get("/help", function(req, res){
   res.end("Need help? Please see https://github.com/Luiserebii/MathFun-Server for the source!")
});



//404 middleware
app.use(function(req, res){
   res.status(404);
   res.end("404: I think u dun goofed m8");

})


app.listen(3000);




module.exports = app;
