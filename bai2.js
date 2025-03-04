let n = Number(prompt("Moi nhap vao so"));
let m = 0;
if (Number.isInteger(n)) {
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            if (i % 5 == 0) {
                m += i + ",";
            }
        }
        alert("Cac so chia het cho 5 tu " + n + " den 1 la:"+m);
    } else { alert("du lieu nhap vao khong hop le") }
}else{alert("Du lieu nhap vao khong hop le")}    
