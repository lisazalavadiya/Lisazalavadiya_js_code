const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const pre = document.querySelectorAll("#pre");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;
  }

  if (BMI <= 18.6) {
    pre.innerHTML = "Under Weight = Less than 18.6";
  } else if (BMI >= 18.6 && BMI <= 24.9) {
    pre.innerHTML = "Normal Range = 18.6 and 24.9";
  } else {
    pre.innerHTML = "Overweight = Greater than 24.9";
  }
});
