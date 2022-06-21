const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const form = document.querySelector("#form");
const pokemonCard = document.querySelector(".card");
const pokemonImg = document.querySelector("#pokemon-img");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonType = document.querySelector("#pokemon-type");
const pokemonWeight = document.querySelector("#weight");
const pokemonHeight = document.querySelector("#height");

function searchPokemon() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput.value}/`)
      .then((res) => res.json())
      .then((data) => {
        const pName = data.name;
        const pImage = data.sprites.front_default;
        const pHeight = data.height;
        const pWeight = data.weight;
        const pTypes = data.types[0].type.name;

        pokemonName.textContent = pName;
        pokemonImg.innerHTML = `<img src=${pImage} alt=${pName} />`;
        pokemonWeight.textContent = "Weight: " + pWeight / 10 + "lbs";
        pokemonHeight.textContent = "Height: " + pHeight / 10 + "m";
        pokemonType.textContent = "Type: " + pTypes;

        searchInput.value = "";
      })
      .catch((error) => {
        alert("Pokemon not found");
        searchInput.value = "";
        pokemonCard.style.display = "none";
      });

    pokemonCard.style.display = "block";
  });
}

window.onload = () => {
  searchPokemon();
};
