const price = document.querySelectorAll(".price");
console.log(price);
const checkbox = document.querySelector("input");
const monthlyPriceValues = ["$19.99", "$24.99", "$39.99"];
const annualPriceValues = ["$199.99", "$249.99", "$399.99"];
const toggle = function () {
  // if checked show monthly prices
  if (checkbox.checked) {
    document.querySelector(".circle-slider").classList.add("checked");
    price[0].textContent = monthlyPriceValues[0];
    price[1].textContent = monthlyPriceValues[1];
    price[2].textContent = monthlyPriceValues[2];
  } else {
    document.querySelector(".circle-slider").classList.remove("checked");
    price[0].textContent = annualPriceValues[0];
    price[1].textContent = annualPriceValues[1];
    price[2].textContent = annualPriceValues[2];
  }
};
checkbox.addEventListener("change", toggle);
toggle();
