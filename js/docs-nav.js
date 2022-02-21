const hamburgMenuBtn = document.querySelector("#btn-hamburger");
const hamburgMenu = document.querySelector("#nav-menu-hamburger");

// toggle display none class
hamburgMenuBtn.addEventListener("click", () => {
  const classes = hamburgMenu.classList;
  classes.toggle("d-none");

});
