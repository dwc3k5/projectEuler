console.log("complete");
//
var cap = 100;
var sumOne = 0;
var sumTwo = 0;
var difference = sumTwo - sumOne;

function firstSum(){
  var tracker = 0;
  for(i = 0; i <= cap; i++){
    tracker += i;
    sumOne += (i*i);
  }
  sumTwo = (tracker*tracker);
  difference = sumTwo - sumOne;
  console.log(difference);
}



firstSum();
