function USD2VND(n) {
  return n * 23500;
}

let usd = Number(prompt("Nhập số tiền USD"));
alert(usd + " USD tương đương với " + USD2VND(usd) + " VND");
