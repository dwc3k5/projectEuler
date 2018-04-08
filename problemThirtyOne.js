console.log("connected");
var cap = 200;
var solutions = 1;
var coins = [100,50,20,10,5,2,1];

function test(){
  //100 counter
  for(i = 0; i < coins.length; i++){
    console.log("currently on coin" + coins[i]);
    var remainder = cap - coins[i];
    for(j = i; j < coins.length; j++){
            while(remainder > 0){
              if(remainder - coins[j] >= 0){
                remainder -= coins[j];
              }
              if(remainder === 0){
                solutions++;
              }



      }
    }
    console.log(solutions);
  }

}
test();
