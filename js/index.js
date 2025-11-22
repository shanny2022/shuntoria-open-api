// endpoint for the Star Wars character Luke Skywalker
const characterUrl = "https://www.swapi.tech/api/people/1";

// grab references to HTML elements
const characterContainer = document.getElementById("character-result");
const filmButton = document.getElementById("load-film");
const filmContainer = document.getElementById("film-result");
const navCharacter = document.getElementById("nav-character");
const navFilm = document.getElementById("nav-film");

// fetch and display character data
function loadCharacter() {
  characterContainer.innerHTML = "Loading character...";
  fetch(characterUrl)
    .then((response) => response.json())
    .then((data) => {
      const person = data.result.properties;

      characterContainer.innerHTML = "";

      const card = document.createElement("div");
      card.classList.add("card");

      const nameHeading = document.createElement("h3");
      nameHeading.innerText = person.name;

      const detailsParagraph = document.createElement("p");
      detailsParagraph.innerText =
        "Height: " +
        person.height +
        " cm | Mass: " +
        person.mass +
        " kg | Birth year: " +
        person.birth_year;

      const extraParagraph = document.createElement("p");
      extraParagraph.innerText =
        "Eye color: " +
        person.eye_color +
        " | Hair color: " +
        person.hair_color +
        " | Gender: " +
        person.gender;

      card.appendChild(nameHeading);
      card.appendChild(detailsParagraph);
      card.appendChild(extraParagraph);

      characterContainer.appendChild(card);
    })
    .catch((error) => {
      console.error("Error fetching SWAPI character:", error);
      characterContainer.innerText = "Could not load character data.";
    });
}

// fetch and display film data
function loadFilm() {
  const filmUrl = "https://www.swapi.tech/api/films/1";

  filmContainer.innerHTML = "Loading film...";
  fetch(filmUrl)
    .then((response) => response.json())
    .then((data) => {
      const film = data.result.properties;

      filmContainer.innerHTML = "";

      const card = document.createElement("div");
      card.classList.add("card");

      const titleHeading = document.createElement("h3");
      titleHeading.innerText = film.title;

      const metaParagraph = document.createElement("p");
      metaParagraph.innerText =
        "Episode: " +
        film.episode_id +
        " | Release date: " +
        film.release_date;

      const openingParagraph = document.createElement("p");
      openingParagraph.innerText = film.opening_crawl;

      card.appendChild(titleHeading);
      card.appendChild(metaParagraph);
      card.appendChild(openingParagraph);

      filmContainer.appendChild(card);
    })
    .catch((error) => {
      console.error("Error fetching SWAPI film:", error);
      filmContainer.innerText = "Could not load film data.";
    });
}

// run when page first loads
loadCharacter();

// button navigation for film section
if (filmButton) {
  filmButton.addEventListener("click", () => {
    loadFilm();
    document
      .getElementById("film-section")
      .scrollIntoView({ behavior: "smooth" });
  });
}

// header navigation links
if (navCharacter) {
  navCharacter.addEventListener("click", (event) => {
    event.preventDefault();
    loadCharacter();
    document
      .getElementById("character-section")
      .scrollIntoView({ behavior: "smooth" });
  });
}

if (navFilm) {
  navFilm.addEventListener("click", (event) => {
    event.preventDefault();
    loadFilm();
    document
      .getElementById("film-section")
      .scrollIntoView({ behavior: "smooth" });
  });
}
