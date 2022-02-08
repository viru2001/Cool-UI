const simpleModalWrapper = document.querySelector("#simple-modal-wrapper");
const simpleModalDemoBtn = document.querySelector("#simple-modal-demo-btn");
const actionBtns = document.querySelectorAll(".btn-action");

const body = document.querySelector("body");

simpleModalDemoBtn.addEventListener("click", () => {
  simpleModalWrapper.style.display = "flex";
});

actionBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.parentNode.id === "simple-modal-buttons") {
      simpleModalWrapper.style.display = "none";
    } 
  });
});

window.addEventListener("click", event => {
  if (event.target === simpleModalWrapper) {
    simpleModalWrapper.style.display = "none";
  } 
});