let n = prompt("Moi nhap vao so");
if (/^\d+$/.test(n)) {
    for (let i = 0; i < Math.floor(n.length / 2); i++) {
        if (n[i] != n[n.length - i - 1]) {
        alert("khong phai so doi xung")
    }else{alert("la so doi xung")}
    break;
}
}