const slider = document.querySelector(".simple-slider");
const value = document.querySelector("#slider-value");

slider.addEventListener("change", () => {
  value.innerHTML = `You selected ${slider.value}`;
});
