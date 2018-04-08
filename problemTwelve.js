console.log("working on 10");
var divisorCount = 0;
var triNum = 0;
counter = 0;

//still working on this one looked up the number and
function test(){

  while(divisorCount <500){
    counter++;
    triNum += counter;
    sqrtTriNum = Math.sqrt(triNum);
    for(i = 1; i < sqrtTriNum; i++){
      if(sqrtTriNum % i === 0){
        divisorCount += 2;
      }
    }
    if(divisorCount === 500){
      console.log(triNum);
    }


  }
// do{
//   counter++;
//   triNum += counter;
//   for(i=1; i <= triNum; i++){
//     if(triNum % i === 0){
//       natNumArray.push(i);
//     }
//   }
//   if(natNumArray.length > 10){
//     return console.log(triNum);
//   }else{
//     natNumArray = [];
//   }
//
// }while(natNumArray.length < 10);
}

test();
