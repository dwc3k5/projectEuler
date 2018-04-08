console.log("connected");
var answered = 0;
function test(){
  while(answered <1){
    for(c = 333; c < 1000; c++){
      for(a = 332; a > 1; a--){
        var b = 1000 - a - c;
        if(a+b+c === 1000 && (a*a) + (b*b) === (c*c)){
          console.log(a*b*c);
          answered = 1;
        }
      }
    }
  }
}
test();
