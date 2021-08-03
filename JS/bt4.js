// Mô Hình Ba Khối
/**Khối 1 : Đầu Vào
 * Chiều dài
 * Chiều rộng
 * 
 * 
 * Khối 2:
 * Bước 1: tạo 4 biến: chieudai,chieurong,chuvi,dientich;
 * Bước 2: Gán giá trị cho 2 biến :chieudai,chieurong;
 * Bước 3: tính dientich , chuvi  bằng công thức
 *         dientich = chieudai*chieurong;
 *         chuvi = (chieudai+chieurong)*2
 * Bước 4 : In kết quả ra console.log
 * Khối 3
 * In kết Quả diện tích và chu vi tính được được
 * 
 */
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