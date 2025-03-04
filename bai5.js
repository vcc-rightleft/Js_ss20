let a = Number(prompr("nhap vao so: "));
let b = Number(prompt("nhap vao luy thua"));
let c = 1;
if (isNaN(a) || isNaN(b)) {
    alert("Không hợp lệ");
} else {
    for (let i = 1; i <= b; i = i + 1) {
    c = c * a;
}
    alert(c);
}