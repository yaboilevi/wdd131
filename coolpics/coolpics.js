const menuButton = document.querySelector(".menu-label");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const hidden = navLinks.classList.toggle("hide");
  menuButton.setAttribute("aria-expanded", String(!hidden));
});

const gallery = document.querySelector("section");
const viewer = document.querySelector(".viewer");
const viewerImg = viewer.querySelector("img");
const closeButton = viewer.querySelector(".close-viewer");

gallery.addEventListener("click", (event) => {
  const img = event.target.closest("img");
  if (!img) return;
  viewerImg.src = img.getAttribute("src").replace("-sm", "-full");
  viewerImg.alt = img.alt;
  viewer.showModal();
});

// <dialog> closes on Esc by default
closeButton.addEventListener("click", () => viewer.close());

// a click on the backdrop targets the dialog itself, not the image
viewer.addEventListener("click", (event) => {
  if (event.target === viewer) viewer.close();
});
