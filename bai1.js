let n = Number(prompt("Moi nhap vao so"));
let m = Number(0);
if (Number.isInteger(n)) {
    if (n > 0) {
        for (let i = 1; i <= n; i++){
            m += i;
        }
        alert(m)
    } else { alert("Du lieu nhap vao khong hop le") };
} else { alert("Du lieu nhap vao khong hop le") };

