console.log("connected");

//for lattice size
var cap = 18;
//eventual answer
var choices  ;
var currentRow = [1,4];
var prevRow = [1,3,6];
var counter = 4;

function test(){
  for(i = 0; i < cap; i++){
    for(j = 1; j < prevRow.length; j++){
      if(currentRow.length === prevRow.length){
        currentRow.push(currentRow[j]*2);
        choices = currentRow[j+1];
        prevRow = currentRow;
        counter ++;
        currentRow = [1,counter];
        break;
      }else{
        currentRow.push((currentRow[j]+prevRow[j+1]));
      }
    }
    console.log("number of choices = "+choices);
  }
}
test();
