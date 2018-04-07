console.log("working on 10");
var natNumArray = [];
var triNum = 0;
counter = 0;

//loop scans factors of i
//each factor added to natNumArray

function test(){
do{
  counter++;
  triNum += counter;
  console.log("TriNum is " + triNum);
  for(i=1; i <= triNum; i++){
    if(triNum % i === 0){
      natNumArray.push(i);
    }
  }
  if(natNumArray.length > 5){
    return console.log(triNum);
  }else{
    natNumArray = [];
  }
  if(counter >= 20){
    console.log("ceiling");
  }


}while(counter < 20);
}
test();
