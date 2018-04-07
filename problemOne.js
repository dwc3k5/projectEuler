console.log("complete");
//problem 1 multiples of 3 and 5 below 1000
var cap = 1000;
var current = 1;
var total = 0;

function test(){
  if(current<cap){
    if(current % 3 === 0 || current % 5 === 0){
      total += current;
    }
    current++;
  return test();
}else{
  console.log(total);
}}
test();
