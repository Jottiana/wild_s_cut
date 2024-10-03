function createCard(movie) {
  const template = document.querySelector("#movie-template");
  const card = template.content.cloneNode(true);

  const affiche = card.querySelector(".affiche");
  affiche.style.backgroundImage = `url(${movie.img})`;

  const youtubeTrailer = card.querySelector(".trailer-link");
  youtubeTrailer.href = movie.trailer;

  const filmTitle = card.querySelector(".film-title");
  filmTitle.textContent = movie.name;

  const filmDate = card.querySelector(".date-value");
  filmDate.textContent = `${movie.date}`;

  const filmGenre = card.querySelector(".type-value");
  filmGenre.textContent = `${movie.type}`;

  const filmDuration = card.querySelector(".duration-value");
  filmDuration.textContent = `${movie.duration}`;

  const recommendation = card.querySelector(".recommendation");
  recommendation.textContent = `${movie.recommendation}`;

  const descriptionText = card.querySelector(".film-synopsis");
  descriptionText.textContent = movie.desc;

  const filmSynopsis = card.querySelector(".film-synopsis");
  filmSynopsis.addEventListener("click", function () {
    this.classList.toggle("show");
  });

  // const buttonAddWatchlist = card.querySelector(".add-watchlist");
  // buttonAddWatchlist.addEventListener("click", () => addWatchlist(movie.name));

  let addButton = card.querySelector(".add-watchlist");
  let removeButton = card.querySelector(".remove-watchlist");

  let watchlist = JSON.parse(localStorage.getItem("watchlist"));
  if (watchlist === undefined || watchlist === null) {
    watchlist = [];
  }
  if (watchlist.includes(movie.name)) {
    addButton.style.display = "none";
    removeButton.style.display = "block";
  } else {
    addButton.style.display = "block";
    removeButton.style.display = "none";
  }

  addButton.addEventListener("click", () => {
    addWatchlist(movie.name);
    addButton.style.display = "none";
    removeButton.style.display = "block";
  });

  removeButton.addEventListener("click", () => {
    addWatchlist(movie.name);
    addButton.style.display = "block";
    removeButton.style.display = "none";
  });

  return card;
}

function addWatchlist(filmId) {
  let watchlist = JSON.parse(localStorage.getItem("watchlist"));
  if (watchlist === undefined || watchlist === null) {
    watchlist = [];
  }
  const index = watchlist.indexOf(filmId);
  if (index > -1) {
    // only splice array when item is found
    watchlist.splice(index, 1);
  } else {
    watchlist.push(filmId);
  }
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

export default createCard;
