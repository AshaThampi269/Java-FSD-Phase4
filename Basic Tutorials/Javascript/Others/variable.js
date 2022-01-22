//----Var-----//
console.log("\n Var Variable \n");
var k = 90;
console.log(k);
{
    var l = 40;
    k = 80;
}
console.log(k);
console.log(l);

//----Constant-----//
console.log("\n Constant Variable \n");
const ll=67;
console.log(ll);
{
    console.log(l);
    //ll=45;  //cannot reassign const variable
}
console.log(ll);

//-----let----------//
console.log("\n Let Variable \n");
let f = 67;
console.log(f);
{
    console.log(f);
    f = 45; 
}
console.log(f); //inner variables are called even after reassigning