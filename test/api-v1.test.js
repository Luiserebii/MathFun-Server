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

     testAPIFib(10, 34, done);

   });

/*   it("isfib returns valid response", function(){

   });

   it("failure on no 'n' passed", function(){

   });

   it("returns apology on nothing hit", function(){

   });
  */ 
   
});




function testAPIFib(input, expectedVal, done){

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
