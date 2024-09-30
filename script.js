import createCard from "./createmoviecard.js";
import listeFilms from "./movieCatalog.js";

document.addEventListener("load", function () {
  filterSelect(null);
});

export function emptyList() {
  let listeFilms = document.querySelector(".movies-container-all");
  while (listeFilms.lastElementChild) {
    listeFilms.removeChild(listeFilms.lastElementChild);
  }
}

export function filterSelect(genre) {
  const cardsContainer = document.querySelector(".movies-container-all");
  console.log(cardsContainer);
  emptyList();
  const filteredMovies = listeFilms.filter((movie) => {
    if (Array.isArray(movie.type)) {
      return movie.type.includes(genre) || genre === null;
    } else {
      return movie.type === genre || genre === null;
    }
  });
  filteredMovies.forEach((movie) => {
    const card = createCard(movie);
    console.log(card);
    cardsContainer.appendChild(card);
  });
}

const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    filterSelect(button.dataset.filter);
  });
});
