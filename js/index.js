// Variabel
var usia = document.getElementById("usia");
var tinggi = document.getElementById("tinggi");
var berat = document.getElementById("berat");
var pria = document.getElementById("pria");
var wanita = document.getElementById("wanita");
var form = document.getElementById("form");
let hasil = document.getElementById("hasil");
// Modal
modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Count BMI
function hitungBmi() {
  var h = [usia.value, tinggi.value, berat.value];
  if (pria.checked) {
    h.push("pria");
  } else if (wanita.checked) {
    h.push("wanita");
  }
  form.reset();

  var bmi = Number(h[2]) / (((Number(h[1]) / 100) * Number(h[1])) / 100);

  var hasil = "";
  if (bmi < 18.5) {
    hasil = "Underweight";
    t =
      "You are underweight, some of the causes are psychological problems, irregular eating, selection of unhealthy food menus";
    t2 =
      "You can try some of the following tips to make your body fuller, increase your calorie intake, choose nutritious foods, exercise, drink milk to gain weight";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    hasil = "Normal";
    t = "You are normal, stay healthy";
    t2 =
      "Some tips for maintaining a healthy body are as follows: eat vegetables, reduce junk food, consume vitamins, get enough sleep, exercise, avoid alcohol and smoking";
  } else if (25 <= bmi && bmi <= 29.9) {
    hasil = "Overweight";
    t = "You are overweight";
    t2 =
      "Some tips for losing weight are as follows: eat small portions, exercise regularly, eat more fiber, get enough sleep and drink lots of water";
  } else if (30 <= bmi && bmi <= 34.9) {
    hasil = "Obesity";
    t =
      "You are Obese, Obesity is a condition when there is a lot of fat that accumulates in the body due to the fact that more calories are consumed than are burned. If not treated immediately, obesity can increase the risk of heart disease, hypertension, and diabetes. Obesity is not just being overweight.";
    t2 =
      "Obesity is characterized by a body mass index (BMI) value of 30 or more, easy or profuse sweating, accumulation of fat in several areas of the body, fatigue, and joint pain. In children, obesity is generally characterized by accumulation of fat in the breasts, tightness when doing physical activity, and puberty disorders. Obesity can be caused by consuming fast food or drinks containing added sugar in the long term. Obesity can also be caused by excessive food consumption that is not balanced with regular exercise";
  } else if (35 <= bmi) {
    hasil = "Very Obese";
    t =
      "You are Very Obesity, Please contact the nearest nutritionist/online";
    t2 =
      "Some tips for you are exercising and reducing calories per day";
  }

  document.querySelector("#text").innerHTML = t;
  document.querySelector("#text2").innerHTML = t2;
  document.querySelector("#penjelasan").innerHTML = hasil;
  document.querySelector("#hasil").innerHTML = bmi.toFixed(2);
}
// Kalkulasi Onclick
function calculate() {
  if (
    usia.value == "" ||
    tinggi.value == "" ||
    berat.value == "" ||
    (pria.checked == false && wanita.checked == false)
  ) {
    modal.style.display = "block";
    modalText.innerHTML = "Please fill in the form correctly and not blank";
  } else {
    hitungBmi();
  }
}
// Reset Hasil
function clearAll() {
  document.querySelector("#text").innerHTML = "";
  document.querySelector("#text2").innerHTML = "";
  document.querySelector("#penjelasan").innerHTML = "";
  document.querySelector("#hasil").innerHTML = "BMI Result";
}
// Close Modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
