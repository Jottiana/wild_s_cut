import createCard from "./createmoviecard.js";
import listeFilms from "./movieCatalog.js";

const cardsContainer = document.querySelector(".movies-container-all");

document.addEventListener("load", function () {
  filterSelect(null);
});

function emptyList() {
  while (cardsContainer.lastElementChild) {
    cardsContainer.removeChild(cardsContainer.lastElementChild);
  }
}

function showAll() {
  showMoviesOfArray(listeFilms);
}

function filterSelect(genre) {
  emptyList();
  const filteredMovies = listeFilms.filter((movie) => {
    if (Array.isArray(movie.type)) {
      return movie.type.includes(genre) || genre === null;
    } else {
      return movie.type === genre || genre === null;
    }
  });

  showMoviesOfArray(filteredMovies);
}

function showMoviesOfArray(movieArray) {
  emptyList();
  movieArray.forEach((movie) => showMovie(movie));
}

function showMovie(movie) {
  const card = createCard(movie);
  cardsContainer.appendChild(card);
}

const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.filter === undefined) {
      showAll();
    } else {
      filterSelect(button.dataset.filter);
    }
  });
});

document.addEventListener("DOMContentLoaded", showAll);
