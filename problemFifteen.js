console.log("connected");

//for lattice size
var cap = 20;
//eventual answer
var choices  ;
//tracking where program is in process
var currentRow = [1];
var prevRow = [1,2];

function test(){
  for(i = 0; i < cap; i++){
    for(j = 0; j < prevRow.length; j++){
      
    }

    if(currentRow.length === prevRow.length){
      currentRow.length += currentRow.length;
      prevRow = currentRow;
    }
  }
}
test();
