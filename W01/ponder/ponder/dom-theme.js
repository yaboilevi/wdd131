//1. Functions

myFunctionName("Levi Miller");
function myFunctionName(name) {
  console.log("Your name is: " + name);
  let lastName = "Miller";
}

myFunctionName("Levi Miller");
myFunctionName("Levi ");

//2. Event Listeners
// Retrieve something from the dom
let select = document.querySelector("#theme-select");

//Event we are listening for, for the function to call when that event occurs

select.addEventListener("change", myFunctionName);

function handleEvent(event) {
  console.log(event);
  console.log(event.target.value);
}

//3. If statements

let selectElem = document.querySelector("#theme-select");
let pageContent = document.querySelector("body");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  let current = selectElem.value;
  if (current === "ocean") {
    document.body.style.backgroundImage =
      "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
    pageContent.style.fontFamily = "Papyrus, fantasy";
  } else if (current === "forest") {
    document.body.style.backgroundImage =
      "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
    pageContent.style.fontFamily = "Impact, sans-serif";
  } else if (current === "desert") {
    document.body.style.backgroundImage =
      "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
    pageContent.style.fontFamily = "'Big Caslon', serif";
  } else {
    // default
    document.body.style.backgroundImage = "none";
    pageContent.style.fontFamily = "Georgia, serif";
  }
}
