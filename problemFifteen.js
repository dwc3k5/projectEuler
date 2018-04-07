console.log("connected");

//for lattice size
var cap = 1;
//tracking where program is in process
var current = 0;
//for array length
var tracker = 1;
var rowSpot = 1;
var adder = 1;
var prevRow = [1,1,1];
//console logged
var answer = 1;
var val = 1;

function test(){
while(current < cap){
  val = val*2;
  console.log("val is now " + val);
  adder = val;
  console.log("adder is now " + adder);
  current++;

  //you're having trouble getting this section to work. rowSpot is the culprit in your code
  while(tracker <= prevRow.length){
    prevRow.splice(rowSpot-1,1,adder);
    adder = adder+prevRow[rowSpot];
    tracker++;
    console.log(tracker);
    // rowSpot++;
    console.log(prevRow);
//     console.log(prevRow.length);
//     console.log(tracker);
//   }
//
  }
// while(tracker < 3){
//   console.log("tracker is at "+ tracker);
//
//   adder = val+prevRow[rowSpot];
//   console.log(adder);
//   tracker++;
//   rowSpot++;
//
}
}

//looking for 6
/*
http://www.mozartreina.com/counting-lattice-paths.html
felt like I was working too hard at this one originally, found this site for an understandeabl equation
*/
test();
