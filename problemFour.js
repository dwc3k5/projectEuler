console.log("connected");
/*
largest possible palindrome: 997799
*/
var pal = 997;
var palArray = [];
var frontPal;
var rearPal;
var finalPal  ;
var palindrome ;
var answered = 0;

function test(){
  while(answered < 1){
    pal--;
    buildPalindrome();
    //loop scans for first number
    for(numOne = 999; numOne > 99; numOne--){
      if(finalPal % numOne === 0 && (finalPal/numOne)<=999){
        console.log(finalPal);
        console.log(numOne);
        console.log(finalPal/numOne);
        answered = 1;
      }
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
  finalPal = parseInt(frontPal+rearPal);
  // console.log(finalPal);
  // console.log(pal);
}


test();
