import createCard from "./createmoviecard.js";
import listeFilms from "./cataloguefilms.js";

// document.addEventListener("DOMContentLoaded", () => {
//   const cardsContainer = document.querySelector(".movies-container-all");
//   listeFilms.forEach((movie) => {
//     const card = createCard(movie);
//     cardsContainer.appendChild(card);
//   });
// });
function emptyList() {
  let listeFilms = document.querySelector(".movies-container-all");
  while (listeFilms.lastElementChild) {
    listeFilms.removeChild(listeFilms.lastElementChild);
  }
}

function filterSelect(genre) {
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

window.filterSelect = filterSelect;
