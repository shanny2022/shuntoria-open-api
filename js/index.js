const url = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=q26yDgwx9H7VsvbMLfkpo9DiVGQtBI&hash=Y";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Marvel API response:", data);

    const firstCharacter = data.data && data.data.results && data.data.results[0];
    if (firstCharacter) {
      console.log("Name:", firstCharacter.name);
      console.log("Description:", firstCharacter.description);
    } else {
      console.log("No characters found in response.");
    }
  })
  .catch((error) => {
    console.error("Error fetching Marvel data:", error);
  });

