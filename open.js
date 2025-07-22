let x1="vin";
let x2="eet";
console.log(x1==x2);

document.writeln(x1==x2);
document.writeln("<br>");
document.writeln("vineetKumar");
let y1="Aadhar";
let y2="Pan";
document.writeln("<br>");
if(x1=="vote"){
document.writeln("yes allowed to do voting"+x1);
}
else if(x2=="DL"){
    document.writeln("yes allowed to do bcz u have"+x2);
}
else{
    document.writeln("You have nothing ");
}
document.writeln("<br>");
var n=10;
for(var i=0;i<n;i++){
    document.writeln("hii given value for a is:"+i+" "+"<br>");
}
// do{
//     document.writeln("hello");
// while(j<=n){
//     document.writeln("hii given"+j +" "+"<br>");
//     j++;
// }
// }

var j=0;
do {
    document.writeln("hello <br>");
    document.writeln("hii given " + j + "<br>");
    j++;
} while (j <= n);


let day=2;
switch(day){
    case 0:
        console.log("mon")
        break;
    case 1:
        console.log("tues");
        break;
    case 2:console.log("wed");
        break;
    default:
        document.writeln("day is"+day);

}