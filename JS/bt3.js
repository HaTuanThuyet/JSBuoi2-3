// Mô Hình Ba Khối
/**Khối 1 : Đầu Vào
 * Số tiền muốn đỗi
 * Giá đô hiện nay
 * 
 * 
 * Khối 2:
 * Bước 1: tạo 3 biến: sotienmuondoi, giadohiennay, tiensaudoi;
 * Bước 2: Gán giá trị cho 2 biến :sotienmuondoi, giadohiennay;
 * Bước 3: tính số tiền sau đỗi  bằng công thức
 *         tiensaudoi = sotienmuondoi * giadohiennay;
 * Bước 4 : In kết quả ra console.log
 * Khối 3
 * In kết Quả Số tiền đỗi được
 * 
 */

function doitiencalc(){
var sotienmuondoi = document.getElementById("inputTotal0").value;
var giausahiennay = document.getElementById("inputPeople0").value;
console.log(sotienmuondoi,giausahiennay);
var tiensaudoi = sotienmuondoi * giausahiennay;
document.getElementById("txtResult0").innerHTML = "Số Tiền Đỗi Được là : " + tiensaudoi + "<span style='vertical-align: super;'>VND</span>";

}
document.getElementById("btnCalc0").onclick = doitiencalc ;



