function findArea(a, b, c) {
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

let a = Number(prompt("Nhập cạnh a"));
let b = Number(prompt("Nhập cạnh b"));
let c = Number(prompt("Nhập cạnh c"));
alert("Diện tích tam giác là: " + findArea(a, b, c));
