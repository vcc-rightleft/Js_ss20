let a = Number(prompt("moi nhap vao so"));
if (Number.isInteger(a) && a > 0) {
    let b = [1,1];
    for (let i = 2; i < a; i++){
        b.push(b[i - 1] + (b[i - 2]))
    }
    alert(b);
}else{alert("du lieu khong hop le")}