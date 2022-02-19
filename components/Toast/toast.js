const closeBtns = document.querySelectorAll(".btn-toast-close");
const successDemoBtn = document.querySelector("#success-toast-demo-btn");
const successToast = document.querySelector("#toast-success");
const errorDemoBtn = document.querySelector("#error-toast-demo-btn");
const errorToast = document.querySelector("#toast-error");

// close toast when clicked on close icon button
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.style.display = "none";
  });
});

// show success toast for 3 sec
successDemoBtn.addEventListener("click", () => {
  successToast.style.display = "flex";

  setTimeout(() => {
    successToast.style.display = "none";
  }, 3000);
});

// show error toast for 3 sec
errorDemoBtn.addEventListener("click", () => {
  errorToast.style.display = "flex";

  setTimeout(() => {
    errorToast.style.display = "none";
  }, 3000);
});
