// calling an API in java script using fetch method
// fetch is asychronous
getMovies();

async function getMovies() {
  const url =
    "https://raw.githubusercontent.com/jameswarnerbyui/static-apis/refs/heads/main/movies.json";

  const response = await fetch(url);

  console.log(response);

  const data = await response.json();

  console.log(data.movies);
  displayMovies(data.movies);
}

function displayMovies(movies) {
  const body = document.querySelector("body");

  movies.forEach((movie) => {
    body.innerHTML += `
        <div>
            <h1>${movie.title}</h1>
            <img src ="${movie.imgSrc}" alt = "${movie.imgAlt}">
        </div>
         `;
  });
}
