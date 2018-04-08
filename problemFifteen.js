console.log("connected");

//for lattice size
var cap = 3;
//tracking where program is in process
var leftCount = 0;
var num = [0];
var choices = 2;


function test(){
  for(i = 0; i < cap; i++){
    choices += num[i];
  }
}
test();
