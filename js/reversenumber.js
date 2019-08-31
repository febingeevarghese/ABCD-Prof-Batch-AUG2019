var x=305;
var rem=0;
var chu=0;

while(x>0){
    rem=x%10;
    chu=chu*10+rem;
    x=parseInt(x/10);

}
console.log(chu);
