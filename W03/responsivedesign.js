let menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", function (e) {
  let navLinks = document.querySelector("nav a");
  console.log("I am clicked ");
  console.log(navLinks.style.display);
  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
    console.log("I am in the if statement");
  } else {
    navLinks.style.display = "none";
  }
});
