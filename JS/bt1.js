
// Mô Hình Ba Khối
/**Khối 1 : Đầu Vào
 * Số ngày làm
 * Tiền Lương Mỗi Ngày
 * Khối 2:
 * Bước 1: tạo 3 biến: songaylam,luongmoingay,tongluong
 * Bước 2: Gán giá trị cho 2 biến :songaylam,luongmoingay
 * Bước 3: tính tổng lương bằng công thức
 *         tongluong = songaylam*luongmoingay
 * Bước 4 : In kết quả ra console.log
 * Khối 3
 * In kết Quả Tổng lương
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