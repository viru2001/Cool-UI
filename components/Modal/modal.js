const simpleModalWrapper = document.querySelector("#simple-modal-wrapper");
const simpleModalDemoBtn = document.querySelector("#simple-modal-demo-btn");
const listModalWrapper = document.querySelector("#list-modal-wrapper");
const listModalDemoBtn = document.querySelector("#list-modal-demo-btn");
const actionBtns = document.querySelectorAll(".btn-action");

const body = document.querySelector("body");

simpleModalDemoBtn.addEventListener("click", () => {
  simpleModalWrapper.style.display = "flex";
});

listModalDemoBtn.addEventListener("click", () => {
  listModalWrapper.style.display = "flex";
});
actionBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.parentNode.id === "simple-modal-buttons") {
      simpleModalWrapper.style.display = "none";
    } else if (btn.parentNode.id === "list-modal-buttons") {
      listModalWrapper.style.display = "none";
    }
  });
});

window.addEventListener("click", event => {
  if (event.target === simpleModalWrapper) {
    simpleModalWrapper.style.display = "none";
  } else if (event.target === listModalWrapper) {
    listModalWrapper.style.display = "none";
  } 
});