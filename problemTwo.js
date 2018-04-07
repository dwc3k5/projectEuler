console.log("complete");
//problem 1 multiples of 3 and 5 below 1000
var cap = 4000000;
var low = 1;
var high = 2;
var newNum ;
var sum = low+high;
var total = 0 ;

function test(){
  if(high<cap){
    //check this
    if(high % 2===0){
      total += high;
    }
    newNum = low+high;
    low = high;
    high = newNum;
  return test();
}else{
  console.log(total);
}}
test();
