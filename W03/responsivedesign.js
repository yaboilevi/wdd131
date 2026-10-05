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

// ===== FIXED VERSION =====
// let menuButton = document.querySelector(".menu-btn");

// menuButton.addEventListener("click", function (e) {
//   let navLinks = document.querySelectorAll("nav a");
//   console.log("I am clicked ");
//   navLinks.forEach(function (link) {
//     console.log(getComputedStyle(link).display);
//     if (getComputedStyle(link).display === "none") {
//       link.style.display = "block";
//       console.log("I am in the if statement");
//     } else {
//       link.style.display = "none";
//     }
//   });
//   menuButton.classList.toggle("change");
// });
