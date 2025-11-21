// First data point: Star Wars character (Luke Skywalker)
const characterUrl = "https://www.swapi.tech/api/people/1";

// Get references to the HTML elements we created in index.html
const characterContainer = document.getElementById("character-result");
const filmButton = document.getElementById("load-film");
const filmContainer = document.getElementById("film-result");

// Function to fetch and display the character
function loadCharacter() {
  fetch(characterUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("SWAPI character response:", data);

      // Get the properties object where the real data lives
      const person = data.result.properties;

      // Clear anything currently in the container
      characterContainer.innerHTML = "";

      // Create a card div to hold the info
      const card = document.createElement("div");
      card.classList.add("card");

      // Create elements for the character name and details
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

      // Add the elements into the card
      card.appendChild(nameHeading);
      card.appendChild(detailsParagraph);

      // Add the card into the character container on the page
      characterContainer.appendChild(card);
    })
    .catch((error) => {
      console.error("Error fetching SWAPI character:", error);
      characterContainer.innerText = "Could not load character data.";
    });
}

// Second data point: Star Wars film (we will load this when the button is clicked)
function loadFilm() {
  const filmUrl = "https://www.swapi.tech/api/films/1";

  fetch(filmUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("SWAPI film response:", data);

      const film = data.result.properties;

      // Clear old film content
      filmContainer.innerHTML = "";

      // Create a card for the film info
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

      // Add elements into the film card
      card.appendChild(titleHeading);
      card.appendChild(metaParagraph);
      card.appendChild(openingParagraph);

      // Add the card to the film container
      filmContainer.appendChild(card);
    })
    .catch((error) => {
      console.error("Error fetching SWAPI film:", error);
      filmContainer.innerText = "Could not load film data.";
    });
}

// When the page loads, immediately show the character data
loadCharacter();

// When the user clicks the button, load film data
if (filmButton) {
  filmButton.addEventListener("click", loadFilm);
}
