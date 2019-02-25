/*
 * ===========================
 *  Math module for fun stuff
 * =========================== 
 * 
 * Current functions implemented:
 *    -Fibonacci
 *
 */

class MathFun {


   //0 1 1 2 3 5....
   //If the number exists within the fibonacci series, return true
   //Otherwise, is false
   static isFibonacci(num){
      let a = 0;
      let b = 1;
      let next = a + b;

      //Check initial values beforehand to get these out of the way...
      //TODO: Arguable inefficiency here in checking 1 twice, both here and in the loop
      if(num == a || num == b) { return true; } 

      while(next <= num){
         next = a + b;
         a = b;
         b = next;

         if(next === num){
            return true;
         }
      }

      return false;

   }

   //Returns the nth fibonacci number
   static fibonacci(n){
      let a = 0;
      let b = 1;
      let next = a + b;

      //Check if we're looking for the first 2 in the series
      if(n == 1){ return a; } else if(n == 2) { return b; }

      for(var i = 2; i < n; i++){
         next = a + b;       
         a = b;
         b = next;
      }

      return b; //b represents the current one, so let's return this
   }  


}


module.exports = MathFun;
