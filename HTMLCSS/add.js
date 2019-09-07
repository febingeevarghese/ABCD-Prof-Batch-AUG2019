$(document).ready(function(){
    $("#BUTTONDISPLAY").click( ()=>{

add=(x,y,callback)=>{
    var z=x+y;
    callback(z);
}
callback=(z)=>{console.log ("Task Completed"+z)}
var x=$('#x').val();
var y=$('#y').val();
add(parseInt (x),parseInt (y),callback)

    });
});



