let selectElem = document.querySelector("select");
let logo = document.querySelector("img");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  let current = selectElem.value;
  if (current == "dark") {
    document.body.classList.add("dark-mode");
    logo.src = "images/byui-logo-dark-mode.png";
  } else {
    document.body.classList.remove("dark-mode");
    logo.src = "images/mission_statement.png";
  }
}
