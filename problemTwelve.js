console.log("working on 10");
//this takes waaaay too long to process. Need to find a more agile process
var primeArray = [2];
var total = 2;
var i = 1;


function test(){
  console.log("running test");
  do{
    //all even numbers are divisible by 2, therefore, skip all evens
    i += 2;
    //scan through array of prime numbers
    for(j = 0; j < primeArray.length; j++){
    //if the current iteration is divisible by a prime, skip it
      if (i % primeArray[j] === 0){
        break;
      }else if(i % primeArray[j] !== 0 && j === primeArray.length-1){
        total +=i;
        primeArray.push(i);

      }
    }
    //defines which prime number I'm looking for
  }while(i <= 2000000);
  if(i >= 1000){
    console.log("your total is "+ total);
  }
}
test();
