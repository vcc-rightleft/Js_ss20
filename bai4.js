let n = prompt("moi nhap ");
let sreach = prompt("nha ki tu");
let flag = 0;
for (let i = 0; i < n.length; i++){
    if (n[i] == sreach) {
        flag = 1;
        break;
    }
}
flag == 1 ? alert(" ton tai"): alert("kohng ton tai");