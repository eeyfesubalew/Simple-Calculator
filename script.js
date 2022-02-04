const one = document.querySelector(".calc_one");
const two = document.querySelector(".calc_two");
const three = document.querySelector(".calc_three");
const four = document.querySelector(".calc_four");
const five = document.querySelector(".calc_five");
const six = document.querySelector(".calc_six");
const seven = document.querySelector(".calc_seven");
const eight = document.querySelector(".calc_eight");
const nine = document.querySelector(".calc_nine");
const zero = document.querySelector(".calc_zero");
const dot = document.querySelector(".calc_dot");
const clear = document.querySelector(".calc_clear");
const times = document.querySelector(".calc_times");
const div = document.querySelector(".calc_div");
const min = document.querySelector(".calc_min");
const plus = document.querySelector(".calc_plus");
const equal = document.querySelector(".calc_equal");
const result = document.querySelector(".calc_result");
let val = "";
one.addEventListener("click", function (e) {
  if (result.textContent === zero.textContent) result.textContent = "";
  result.value = result.value + "1";
  console.log(one.value);
});
two.addEventListener("click", function (e) {
  result.value = `${result.value}${two.textContent}`;
});
three.addEventListener("click", function (e) {
  result.value = `${result.value}${three.textContent}`;
});
four.addEventListener("click", function (e) {
  result.value = `${result.value}${four.textContent}`;
});
five.addEventListener("click", function (e) {
  result.value = `${result.value}${five.textContent}`;
});
six.addEventListener("click", function (e) {
  result.value = `${result.value}${six.textContent}`;
});
seven.addEventListener("click", function (e) {
  result.value = `${result.value}${seven.textContent}`;
});
eight.addEventListener("click", function (e) {
  result.value = `${result.value}${eight.textContent}`;
});
nine.addEventListener("click", function (e) {
  result.value = `${result.value}${nine.textContent}`;
});
zero.addEventListener("click", function (e) {
  result.value = `${result.value}${zero.textContent}`;
});
dot.addEventListener("click", function (e) {
  result.value = `${result.value}${dot.textContent}`;
});
plus.addEventListener("click", function (e) {
  result.value = result.value + "+";
});
times.addEventListener("click", function (e) {
  result.value = result.value + "*";
});
min.addEventListener("click", function (e) {
  result.value = result.value + "-";
});
div.addEventListener("click", function (e) {
  result.value = result.value + "/";
});
equal.addEventListener("click", function (e) {
  if (!result.value) return;
  result.value = eval(result.value);
});

clear.addEventListener("click", function () {
  result.value = "";
});
