const express = require('express');
const MathFun = require('../src/math');


var router = express.Router();


/*
 * API STUFF
 *
 */


router.get("/fibonacci", function(req, res, next){
   if(req.query.type) { return next(); }
   if(!req.query.n) { return res.end("ERROR: No \"n\" parameter query passed."); }

   let n = parseInt(req.query.n, 10);
   let fibResult = MathFun.fibonacci();
  
   let jsonRes = { result: fibResult, success: 200 };
   res.json(jsonRes);
});

router.use(function(req, res, next){
   if(!req.query.type == "isFib") { return next(); }
   if(!req.query.num) { return res.end("ERROR: No \"fib\" parameter query passed."); }

   let num = parseInt(req.query.num, 10);
   let boolRes = MathFun.isFibonacci(num);

   let jsonRes = { result: boolRes, success: 200 }
   res.json(jsonRes);
});




router.use(function(req, res){
   res.end("Sorry, nothing hit!");
});

module.exports = router;
