const MathFun = require("../src/math");

const chai = require("chai");
const expect = chai.expect;

const supertest = require("supertest");
const app = require("../app");

/*
 * Our API server test file using supertest!
 *    npm: https://www.npmjs.com/package/supertest
 *    syntax docs: https://visionmedia.github.io/superagent/ (syntax is all based on superagent)
 *
 */


describe("API V1", function(){
   
   it("fibonacci endpoint returns valid fib", function(done){
      testFib(10, 34, done);
   });

   it("isfib returns valid response", function(done){
      testIsFib(8, true, done);
   });


   describe("looping through fib to check validity", function(done){

      for(let i = 20; i < 32; i++){
         let fib = MathFun.fibonacci(i);
         let testStr = i + "nth fib is valid - " + fib;

         it(testStr, function(done){
            testIsFib(parseInt(fib, 10), true, done);
         });
      }
   });

  
   it("failure on no 'n' passed", function(done){
      
      supertest(app)
         .get("/v1/fibonacci")
         .expect(400)
         .end(function(err, res){
            if (err) return done(err);
            done();
         });
      
   });

   it("returns apology on nothing hit", function(done){

      supertest(app)
         .get("/v1/anallubricant")
         .expect(404)
         .end(function(err, res){
            if (err) return done(err);
            done();
         });
 
   });

});




function testFib(input, expectedVal, done){

   //Pass 10, expecting 34 and status code 200
   supertest(app)
      .get("/v1/fibonacci")
      .query({ n: input })
      .expect(200)
      .end(function(err, res){
         if (err) return done(err);
         let json = res.body;
         //console.log(JSON.stringify(json));
         //console.log(json.result);
         expect(json.result).to.equal(expectedVal);
         done();
      });

}

function testIsFib(input, expectedVal, done){

   //Pass 10, expecting 34 and status code 200
   supertest(app)
      .get("/v1/fibonacci")
      .query({ n: input, type: "isFib" })
      .expect(200)
      .end(function(err, res){
         if (err) return done(err);
         let json = res.body;
         expect(json.result).to.equal(expectedVal);
         done();
      });

}

