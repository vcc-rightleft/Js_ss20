let a = Number(prompt("moi nhap vao so"));
let flag = 0;
if (Number.isInteger(a) && a>1) {
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i == 0) {
            flag = 1;
            break;
        }
    }
    flag = 1 ? alert("la so nguyen to") : alert("khong phai so nguyen to");
} else { alert("du lieu nhap vao khong dung"); }
