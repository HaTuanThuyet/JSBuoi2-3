

function doitiencalc(){
var sotienmuondoi = document.getElementById("inputTotal0").value;
var giausahiennay = document.getElementById("inputPeople0").value;
console.log(sotienmuondoi,giausahiennay);
var tiensaudoi = sotienmuondoi * giausahiennay;
document.getElementById("txtResult0").innerHTML = "Số Tiền Đỗi Được là : " + tiensaudoi + "<span style='vertical-align: super;'>VND</span>";

}
document.getElementById("btnCalc0").onclick = doitiencalc ;



