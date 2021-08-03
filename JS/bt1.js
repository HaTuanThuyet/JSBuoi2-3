
/** Mô Hình Ba Khối
 * 
 */
function CalcEle(){
    var songayEle = document.getElementById("inputTotal").value;
    var luongEle = document.getElementById("inputPeople").value;
    // console.log(songayEle,luongEle);
    var total = songayEle * luongEle ;
    // console.log(total);
    
  
  document.getElementById("txtResult").innerHTML = "Tổng Lương là : " + total ;
  document.getElementById("txtResult").style.color = "black";

}

document.getElementById("btnCalc").onclick = CalcEle;