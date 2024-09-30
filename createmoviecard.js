import listeFilms from "./movieCatalog.js";

document.addEventListener("DOMContentLoaded", createCard);

function createCard(movie) {
  const card = document.createElement("div");
  card.classList.add("film-card-container");

  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex-container");

  const afficheContainer = document.createElement("div");
  afficheContainer.classList.add("affiche-container");

  const affiche = document.createElement("div");
  affiche.classList.add("affiche");
  affiche.style.backgroundImage = `url(${movie.img})`;

  afficheContainer.appendChild(affiche);

  const filmInfo = document.createElement("div");
  filmInfo.classList.add("film-info");

  const filmTitle = document.createElement("h3");
  filmTitle.classList.add("film-title");
  filmTitle.textContent = movie.name;

  const filmDetails = document.createElement("div");
  filmDetails.classList.add("film-details");

  const filmDate = document.createElement("span");
  filmDate.classList.add("date");
  filmDate.textContent = `Date: ${movie.date}`;

  const filmGenre = document.createElement("span");
  filmGenre.classList.add("type");
  filmGenre.textContent = `Genre: ${movie.type}`;

  const filmDuration = document.createElement("span");
  filmDuration.classList.add("duration");
  filmDuration.textContent = `Durée: ${movie.duration}`;

  filmDetails.appendChild(filmDate);
  filmDetails.appendChild(filmGenre);
  filmDetails.appendChild(filmDuration);

  filmInfo.appendChild(filmTitle);
  filmInfo.appendChild(filmDetails);

  flexContainer.appendChild(afficheContainer);
  flexContainer.appendChild(filmInfo);

  card.appendChild(flexContainer);

  const filmDescription = document.createElement("div");
  filmDescription.classList.add("film-description");

  const descriptionTitle = document.createElement("h4");
  descriptionTitle.textContent = "Summary:";

  const descriptionText = document.createElement("p");
  descriptionText.textContent = movie.desc;

  const voirPlusButton = document.createElement("button");
  voirPlusButton.id = "voir-plus";
  voirPlusButton.textContent = "Voir plus";

  filmDescription.appendChild(descriptionTitle);
  filmDescription.appendChild(descriptionText);
  filmDescription.appendChild(voirPlusButton);

  card.appendChild(filmDescription);

  console.log(card);

  return card;
}

export default createCard;
