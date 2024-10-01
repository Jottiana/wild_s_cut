function createCard(movie) {
  const template = document.querySelector("#movie-template");
  const card = template.content.cloneNode(true);

  const affiche = card.querySelector(".affiche");
  affiche.style.backgroundImage = `url(${movie.img})`;

  const filmTitle = card.querySelector(".film-title");
  filmTitle.textContent = movie.name;

  const filmDate = card.querySelector(".date-value");
  filmDate.textContent = `${movie.date}`;

  const filmGenre = card.querySelector(".type-value");
  filmGenre.textContent = `${movie.type}`;

  const filmDuration = card.querySelector(".duration-value");
  filmDuration.textContent = `${movie.duration}`;

  const descriptionText = card.querySelector(".film-synopsis");
  descriptionText.textContent = movie.desc;

  const filmSynopsis = card.querySelector(".film-synopsis");
  filmSynopsis.addEventListener("click", function () {
    this.classList.toggle("show");
  });

  return card;
}

export default createCard;
