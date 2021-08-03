function hcnElE(){
var height = parseInt(document.getElementById("inputTotall").value);
var width = parseInt(document.getElementById("inputPeople4").value);
// console.log(height,width);
var chuvi = (height + width)*2;
var dientich = width * height;
// console.log(chuvi,dientich);
document.getElementById("txtResult2").innerHTML = "Diện Tích là " + dientich + "<br> " + " Chu vi là :" + chuvi ;
}
document.getElementById("btnCalc2").onclick = hcnElE ;