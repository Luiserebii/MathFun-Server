const MathFun = require("../src/math"); 

const chai = require("chai");
const expect = chai.expect;

describe("Fibonacci functions", function(){ 

   describe("initial values are valid fibs", function(){

      it("0 is a fib", function(){
         let isFib = MathFun.isFibonacci(0);
         expect(isFib).to.be.true;
      });

      it("1 is a fib", function(){
         let isFib = MathFun.isFibonacci(1);
         expect(isFib).to.be.true;
      });
      
   });

   describe("valid fibs pass", function(){

      it("3 is a fib", function(){
         expect(MathFun.isFibonacci(3)).to.be.true;
      })
      it("5 is a fib", function(){
         expect(MathFun.isFibonacci(5)).to.be.true;
      })
      it("8 is a fib", function(){
         expect(MathFun.isFibonacci(8)).to.be.true;
      })
      it("13 is a fib", function(){
         expect(MathFun.isFibonacci(13)).to.be.true;
      })
      it("89 is a fib", function(){
         expect(MathFun.isFibonacci(89)).to.be.true;
      })
      it("144 is a fib", function(){
         expect(MathFun.isFibonacci(144)).to.be.true;
      })

   });

   describe("invalid fibs fail", function(){

      it("9 is not a fib", function(){
         expect(MathFun.isFibonacci(9)).to.be.false;
      })
      it("100 is not a fib", function(){
         expect(MathFun.isFibonacci(100)).to.be.false;
      })
      it("125 is not a fib", function(){
         expect(MathFun.isFibonacci(125)).to.be.false;
      })
      it("160 is not a fib", function(){
         expect(MathFun.isFibonacci(160)).to.be.false;
      })
      it("320 is not a fib", function(){
         expect(MathFun.isFibonacci(320)).to.be.false;
      })
      it("1000 is not a fib", function(){
         expect(MathFun.isFibonacci(1000)).to.be.false;
      })

   });


   describe("returns valid nth fib", function(){
      it("1st fib is 0", function(){
         expect(MathFun.fibonacci(1)).to.equal(0);
      });
      it("2nd fib is 1", function(){
         expect(MathFun.fibonacci(2)).to.equal(1);
      });
      it("3rd fib is 1", function(){
         expect(MathFun.fibonacci(3)).to.equal(1);
      });
      it("5th fib is 3", function(){
         expect(MathFun.fibonacci(5)).to.equal(3);
      });
      it("10th fib is 34", function(){
         expect(MathFun.fibonacci(10)).to.equal(34);
      });
      

   });

   describe("looped fibonacci from 20-32 are valid from own library", function(){
      for(var i = 20; i < 32 + 1; i++){
         let fibNum = MathFun.fibonacci(i);
         let teststr = i + "nth fib is valid - " + fibNum;
         it(teststr, function(){
            expect(MathFun.isFibonacci(fibNum)).to.be.true;
         });

      }

   });

});
