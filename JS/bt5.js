
function haikiso(){
var edge = parseInt(document.getElementById("inputTotalx").value);
// console.log(edge);
var unit = Math.floor(edge%10);
var ten = Math.floor(edge/10);
var sum = unit + ten ;
document.getElementById("txtResult5").innerHTML = "Tổng Hai Kí Số là : " + sum;
}
document.getElementById("btnCalc5").onclick = haikiso ;