const hamburgerMenuBtn = document.querySelector("#hamburger-btn");
const hamburgerMenu = document.querySelector("#hamburger-nav-menu");

// toggle display none class
hamburgerMenuBtn.addEventListener("click", () => {
  const classes = hamburgerMenu.classList;
  classes.toggle("d-none");
});
