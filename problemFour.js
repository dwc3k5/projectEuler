console.log("connected");
var numOne = 999;
var numTwo = 999;
/*
largest possible palindrome: 997799
*/
var pal = 997;
var palArray = [];
var frontPal;
var rearPal;
var finalArray  ;
var palindrome ;
var answered = 0;

function test(){
  while(answered < 1){
    pal--;
    buildPalindrome();
    for(i = 999; i > 99; i--){

    }
  }
}

function buildPalindrome(){
  //converts palindrome to a string, and then separates each character into an array
  palArray = pal.toString().split("");
  //converts array back to a string
  frontPal = palArray.join("");
  //inverts array and turns into a string
  rearPal = palArray.reverse().join("");
  //combines front and back of palindrome and converts to integer
  finalArray = parseInt(frontPal+rearPal);
  console.log(finalArray);
  console.log(pal);
}


test();
