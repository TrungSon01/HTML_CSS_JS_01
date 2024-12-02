// Lấy button và div
let btn1 = document.getElementById("but1");
let btn2 = document.getElementById("but2");
let btn3 = document.getElementById("but3");
let btn4 = document.getElementById("but4");
let btn5 = document.getElementById("but5");
let div1 = document.querySelector(".Ex1");
let div2 = document.querySelector(".Ex2");
let div3 = document.querySelector(".Ex3");
let div4 = document.querySelector(".Ex4");
let div5 = document.querySelector(".Ex5");
// Lưu màu ban đầu của div
let originalColor = " rgb(209, 209, 35) ";
let newColor = "lightpink"; // Màu mới khi thay đổi

// Thêm sự kiện click cho button
btn1.addEventListener("click", function () {
  if (div1.style.backgroundColor === newColor) {
    // Nếu màu hiện tại là màu mới, thì quay lại màu cũ
    div1.style.backgroundColor = originalColor;
  } else {
    // Nếu không, thay đổi sang màu mới
    div1.style.backgroundColor = newColor;
  }
});
btn2.addEventListener("click", function () {
  if (div2.style.backgroundColor === newColor) {
    // Nếu màu hiện tại là màu mới, thì quay lại màu cũ
    div2.style.backgroundColor = originalColor;
  } else {
    // Nếu không, thay đổi sang màu mới
    div2.style.backgroundColor = newColor;
  }
});
btn3.addEventListener("click", function () {
  if (div3.style.backgroundColor === newColor) {
    // Nếu màu hiện tại là màu mới, thì quay lại màu cũ
    div3.style.backgroundColor = originalColor;
  } else {
    // Nếu không, thay đổi sang màu mới
    div3.style.backgroundColor = newColor;
  }
});
btn4.addEventListener("click", function () {
  if (div4.style.backgroundColor === newColor) {
    // Nếu màu hiện tại là màu mới, thì quay lại màu cũ
    div4.style.backgroundColor = originalColor;
  } else {
    // Nếu không, thay đổi sang màu mới
    div4.style.backgroundColor = newColor;
  }
});
btn5.addEventListener("click", function () {
  if (div5.style.backgroundColor === newColor) {
    // Nếu màu hiện tại là màu mới, thì quay lại màu cũ
    div5.style.backgroundColor = originalColor;
  } else {
    // Nếu không, thay đổi sang màu mới
    div5.style.backgroundColor = newColor;
  }
});
// ........................ ......................

// bài 1 nhập 2 số
let btnBai1 = document.querySelector("#btn-bai1");
btnBai1.addEventListener("click", function () {
  let salary1day = document.querySelector("#salary1day").value;
  let day = document.querySelector("#day").value;
  let salary = salary1day * day;
  document.querySelector("#salary").value = salary;
});

// bài 4 nhập 2 số
let btnBai4 = document.querySelector("#btn-bai4");
btnBai4.addEventListener("click", function () {
  let CD = parseFloat(document.querySelector("#CD").value); // Chiều dài
  let CR = parseFloat(document.querySelector("#CR").value); // Chiều rộng
  let DT = CR * CD;
  let CV = (CR + CD) * 2;
  document.querySelector("#DT").value = DT;
  document.querySelector("#CV").value = CV;
});

// bài 2 nhập 5 số
let btnBai2 = document.querySelector("#btn-bai2");
btnBai2.addEventListener("click", function () {
  let n1 = parseFloat(document.querySelector("#n1").value); // số 1
  let n2 = parseFloat(document.querySelector("#n2").value); // số 2
  let n3 = parseFloat(document.querySelector("#n3").value); // số 3
  let n4 = parseFloat(document.querySelector("#n4").value); // số 4
  let n5 = parseFloat(document.querySelector("#n5").value); // số 5
  let sum = n1 + n2 + n3 + n4 + n5;
  sum = sum / 5;
  document.querySelector("#TB").value = sum;
});

//bai 3 đổi từ dollar sang Vnđ

let btnBai3 = document.querySelector("#btn-bai3");
btnBai3.addEventListener("click", function () {
  let Dollar = parseFloat(document.querySelector("#Dollar").value); // số 1
  let Vnđ = Dollar * 23500;
  document.querySelector("#Vnđ").value = Vnđ;
});

// /bai 3 đổi từ dollar sang Vnđ

let btnBai5 = document.querySelector("#btn-bai5");
btnBai5.addEventListener("click", function () {
  let r1 = parseInt(document.querySelector("#input_number").value) % 10;
  if (r1 < 0) r1 = -r1; // số âm
  let r2 = parseInt(document.querySelector("#input_number").value / 10);
  if (r2 < 0) r2 = -r2; // số âm
  Math.floor(r2);
  document.querySelector("#result").value = r1 + r2;
});
