// Mô Hình Ba Khối
/**Khối 1 : Đầu Vào
 * Số thứ nhất
 * Số thứ hai
 * Số thứ ba
 * Số thứ tư
 * Số thứ năm
 * 
 * 
 * Khối 2:
 * Bước 1: tạo 6 biến: adge1,adge2,adge3,adge4,adge5,sum;
 * Bước 2: Gán giá trị cho 5 biến :adge1,adge2,adge3,adge4,adge5
 * Bước 3: tính tổng 5 số  bằng công thức
 *         sum = edge1+edge2+edge3+edge4+edge5;
 * Bước 4 : In kết quả ra console.log
 * Khối 3
 * In kết Quả Tổng lương
 * 
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
