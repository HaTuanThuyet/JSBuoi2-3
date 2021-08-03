/**
 * Mô Hình Ba Khối
 */
function SumCalc(){
var adge1 = parseInt(document.getElementById("inputTotal1").value);
var adge2 = parseInt(document.getElementById("inputTotal2").value);
var adge3 = parseInt(document.getElementById("inputTotal3").value);
var adge4 = parseInt(document.getElementById("inputTotal4").value);
var adge5 = parseInt(document.getElementById("inputTotal5").value);

var sum;

sum = adge1 + adge2 + adge3 + adge4 + adge5;
document.getElementById("txtResult7").innerHTML = "Tổng của 5 số là : " + sum ;
}
document.getElementById("btnCalc7").onclick = SumCalc ;
