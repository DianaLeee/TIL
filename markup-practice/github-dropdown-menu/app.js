var dropdownMenu = document.querySelector(".dropdown-menu");
var dropdownButton = document.querySelector(".dropdown-button");

dropdownButton.addEventListener("click", event => {
  if (this.active) {
    dropdownMenu.classList.remove("menu-active");
  } else {
    dropdownMenu.classList.add("menu-active");
  }
  this.active = !this.active;
});

dropdownButton.active = false;
