console.log("working on");
//this one I had to reverse engineer and put "*" next to the sections I'm still struggling with. Decked the code out with notes to help understanding

var answer ;
var primeArray =[2];
var i = 1;


function test(){
  do{
    //all even numbers are divisible by 2, therefore, skip all evens
    i += 2;
    //scan through array of prime numbers
    for(j = 0; j < primeArray.length; j++){
    //if the current iteration is divisible by a prime, skip it
      if (i % primeArray[j] === 0){
        break;
      }else if(i % primeArray[j] !== 0 && j === primeArray.length-1){
        primeArray.push(i);
      }
      if(primeArray.length === 10001){
        console.log(primeArray[10000]);
      }
    }
    //defines which prime number I'm looking for
  }while(primeArray.length < 10001);
}
test();
