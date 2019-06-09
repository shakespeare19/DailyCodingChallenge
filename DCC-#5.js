// check whether a number is prime or not. Go to the editor 
// Sample Output:
// Input a number to check prime or not: 13
// The entered number is a prime number.

function checkPrime(n){
    if (n === 1){
      return false 
    }
    else if (n === 2){
      console.log(+n+ ' prime');
    }
    else{
      for (x = 2 ; x < n ; x++){
        if (n % x === 0){
          rconsole.log(+n+ 'not prime'); 
        }
      }
      return true;  
    }
  }
  
  console.log(checkPrime(13));