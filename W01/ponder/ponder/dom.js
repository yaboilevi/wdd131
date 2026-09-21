// How to manipulate the DOM with JavaScript

// Grab our h1 from the page

let heading = document.querySelector("h1");

console.log(heading);

//change the text of the element :D
heading.textContent = "Changed the heading to comething else!";

// change the text color
heading.style.color = "blue";
heading.style.fontStyle = "italic";
heading.style.border = "1px solid black";

// retrive a ID element from the page

document.getElementById("topics").style.color = "red";

let image = document.querySelector("img");

console.log(image.getAttribute("src"));

image.setAttribute(
  "src",
  "https://media.tenor.com/qidowOYwqScAAAAM/yes-yes-sir.gif",
);

let selectElem = document.getElementById("webdevlist");

selectElem.addEventListener("change", function () {
  let codeValue = selectElem.value;
  console.log(codeValue);
});
