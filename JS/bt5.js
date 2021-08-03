// Mô Hình Ba Khối
/**Khối 1 : Đầu Vào
 *Nhập số n
 * Khối 2:
 * Bước 1: tạo 4 biến: n,unit,ten,sum;
 * 
 * 
 * Bước 2: Gán giá trị cho 1 biến :n;
 * Bước 3: tính số hàng chục theo công thức
 *        unit = Math.floor(n%10);
 * Bước 4 :tính số hàng đơn vị theo công thức
 *        ten =Math.floor(n/10);
 * Bước 5 tính tổng 2 số theo cong thức
 *        sum = unit + ten ;
 * Bước 6: In sum ra console
 * Khối 3
 * In kết Quả sum 
 * 
 */
function haikiso(){
var edge = parseInt(document.getElementById("inputTotalx").value);
// console.log(edge);
var unit = Math.floor(edge%10);
var ten = Math.floor(edge/10);
var sum = unit + ten ;
document.getElementById("txtResult5").innerHTML = "Tổng Hai Kí Số là : " + sum;
}
document.getElementById("btnCalc5").onclick = haikiso ;