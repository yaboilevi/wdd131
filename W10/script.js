const hikeContainer = document.querySelector("#hike-container");
const input = document.querySelector("#search");
const button = document.querySelector("#search-button");

// --- Practice (sort / filter) ---
const simpleList = ["Bananas", "apples", "Carrots", "dates", "Eggplant", "figs", "Grapes", "honeydew", "Kale"];
function compareFn(a, b) {
  a = a.toLowerCase(); b = b.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

// --- Hike app ---
function tagTemplate(tag) { return `<li>${tag}</li>`; }

function difficultyTemplate(difficulty) {
  // TODO: 5 slots, 🥾 per level, "▫" for the rest, with an aria-label
}

function hikeTemplate(hike) {
  // TODO: return the HTML string for one hike card
}

function renderHikes(list) {
  hikeContainer.innerHTML = list.map(hikeTemplate).join("");
}

function compareHikes(a, b) {
  // TODO: sort by distance (parseFloat the distance string)
}

function searchHandler() {
  // TODO: filter hikes by name, description, and tags (case-insensitive), sort, render
}

button.addEventListener("click", searchHandler);
input.addEventListener("keypress", (e) => { if (e.key === "Enter") searchHandler(); });

function init() {
  // TODO: render one random hike: Math.floor(Math.random() * hikes.length)
}
init();
