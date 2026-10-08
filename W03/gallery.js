const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

// Change this if your high-res files use a different suffix (e.g. "-lg" or "-full.jpeg")
const FULL_SUFFIX = "-full.jpg";

// Event listener for opening the modal
gallery.addEventListener("click", openModal);

function openModal(e) {
  // Only react when an image (not the gap between images) was clicked
  const clickedImage = e.target.closest("img");
  if (!clickedImage) return;

  // "images/book-sm.jpg" -> "images/book-full.jpg"
  const smallSrc = clickedImage.getAttribute("src");
  const fullSrc = smallSrc.split("-sm")[0] + FULL_SUFFIX;

  // If the high-res file can't be found, fall back to the thumbnail
  modalImage.onerror = () => {
    modalImage.onerror = null;
    modalImage.src = smallSrc;
  };
  modalImage.src = fullSrc;
  modalImage.alt = clickedImage.alt;

  // showModal() also makes the Esc key close the dialog automatically
  modal.showModal();
}

// Close modal on button click
closeButton.addEventListener("click", () => {
  modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
