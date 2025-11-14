// Function to check if a number is prime
function isPrime(num) {
   if (num <= 1) {
       return false;
   }
   for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0) {
           return false;
       }
   }
   return true;
}

function evenOdd(num) {
   return num % 2 === 0;
}
// Example usage:
//console.log(isPrime(5));     // true
//console.log(isPrime(10));    // false
