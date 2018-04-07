console.log("connected");
//pretty sure there is a faster way to scan for this, notes dictate single digit integers covered by higher numbers to reduce redundant scans
//can start scanning at 20
var answer = 20;
var found = 0;

function test(){
  while(found < 1){
    if(
      answer % 11 === 0 &&
      answer % 12 === 0 &&
      answer % 13 === 0 &&
      //divisible by 7
      answer % 14 === 0 &&
      answer % 15 === 0 &&
      //divisible by 8
      answer % 16 === 0 &&
      answer % 17 === 0 &&
      //divisible by 9,3
      answer % 18 === 0 &&
      answer % 19 === 0 &&
      //divisible by 10,5,4,2
      answer % 20 === 0){
      found = 1;
      return console.log("your answer is "+ answer);

    }else{
      //number must be divisible by 20, therefore we can increase the search by 20 each time, cutting out a lot of scans
      answer +=20;
    }
  }
}



test();
