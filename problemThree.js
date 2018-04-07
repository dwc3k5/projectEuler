console.log("working on");
//this one I had to reverse engineer and put "*" next to the sections I'm still struggling with. Decked the code out with notes to help understanding
var cap = 600851475143;
largestFact = 0;
var arrPrime=[0,0];



function test(){
  //this first loop looks for all the numbers that are factors of cap
  for(i=2; (i*i) < cap; i++){
  //check if cap is divisible by each iteration of "i"
    if(cap % i === 0){
  //stores "i" in the array
      arrPrime[0] = i;
  //*stores ??? in the array
      arrPrime[1] = cap/i;
  //checkpoint for me, not needed for answer
      console.log(arrPrime);

  //used to assess each part of the array
      for (k=0; k < 2; k++){
  //variable used in a later if statement
        var isPrime = true;
  //*checks if the stored numbers are primes by attempting to divide them by increasing numbers in the loop
        for (j=2; (j*j) < arrPrime[k]; j++){
  //if a divisible instance of "j" is found, break the loop, scanning for more numbers
          if(arrPrime[k] % j === 0){
            isPrime = false;
            break;
          }
        }
  //each time a new highest prime number is found, store it as the new largestFact value, and print the new value
        if(isPrime && arrPrime[k] > largestFact){
          largestFact = arrPrime[k];
          console.log(largestFact);
        }
      }
    }
  }
}

test();
