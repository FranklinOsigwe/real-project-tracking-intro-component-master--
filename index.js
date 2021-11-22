

const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const list = document.querySelector(".list")

hamburgerIcon.addEventListener("click", (event) => {
  // hide the hamburger
  event.target.parentElement.classList.add("d-none");
  // show close icon
  closeIcon.classList.remove("d-none");
  // show the nav
  list.classList.remove("d-none")
});

closeIcon.addEventListener("click", (event) => {
  // hide the close
  event.target.parentElement.classList.add("d-none");
  // show close hamburger
  hamburgerIcon.classList.remove("d-none");
  // close the nav
  list.classList.add("d-none")

});
