// 1. add event listener to the button
document.querySelector("#rollButton").addEventListener("click", (event) => {
  // animate the die
  const images = document.querySelectorAll("#gameboard img");
  images.forEach((image) => {
    if (isDieUnlocked(image)) image.src = "./assets/die_rolling.gif";
  });

  // change the value each die lands on
  setTimeout(() => {
    // run what is in here after 3000 milliseconds
    images.forEach((image) => {
      if (isDieUnlocked(image)) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        image.src = `./assets/white_dice_${randomNumber}.gif`;
      }
    });
  }, 400);
});

function isDieUnlocked(dieImage) {
  const checkboxes = document.querySelectorAll("#gameboard input");

  const unchecked = Array.from(checkboxes).filter(
    (checkboxes) => !checkboxes.checked,
  );
  return unchecked.find(
    (unchecked) => unchecked.className === dieImage.className,
  );
}
