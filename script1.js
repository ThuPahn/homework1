function C2F(c) {
  return c * 1.8 + 32;
}

let c = Number(prompt("Nhập nhiệt độ theo °C"));
alert(c + " °C tương đương với " + C2F(c) + " °F");
