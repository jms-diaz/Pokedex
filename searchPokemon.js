const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const form = document.querySelector("#form");
const pokemonCard = document.querySelector(".card");
const pokemonImg = document.querySelector("#pokemon-img");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonType = document.querySelector("#pokemon-type");
const pokemonWeight = document.querySelector("#weight");
const pokemonHeight = document.querySelector("#height");

const colors = {
  fire: "#EE8130",
  grass: "#7AC74C",
  electric: "#F7D02C",
  water: "#6390F0",
  ground: "#E2BF65",
  rock: "#B6A136",
  fairy: "#D685AD",
  poison: "#A33EA1",
  bug: "#A6B91A",
  dragon: "#6F35FC",
  psychic: "#F95587",
  flying: "#A98FF3",
  fighting: "#C22E28",
  normal: "#A8A77A",
};

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

        switch (pTypes) {
          case "fire":
            pokemonCard.style.background = colors.fire;
            break;
          case "grass":
            pokemonCard.style.background = colors.grass;
            break;
          case "electric":
            pokemonCard.style.background = colors.electric;
            break;
          case "water":
            pokemonCard.style.background = colors.water;
            break;
          case "ground":
            pokemonCard.style.background = colors.ground;
            break;
          case "rock":
            pokemonCard.style.background = colors.rock;
            break;
          case "fairy":
            pokemonCard.style.background = colors.fairy;
            break;
          case "poison":
            pokemonCard.style.background = colors.poison;
            break;
          case "bug":
            pokemonCard.style.background = colors.bug;
            break;
          case "dragon":
            pokemonCard.style.background = colors.dragon;
            break;
          case "psychic":
            pokemonCard.style.background = colors.psychic;
            break;
          case "flying":
            pokemonCard.style.background = colors.flying;
            break;
          case "fighting":
            pokemonCard.style.background = colors.fighting;
            break;
          case "normal":
            pokemonCard.style.background = colors.normal;
            break;
          default:
            pokemonCard.style.background = "#fff";
        }

        pokemonCard.style.display = "block";

        pokemonName.textContent = pName;
        pokemonImg.innerHTML = `<img class="pokemon" src=${pImage} alt=${pName} />`;
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
  });
}

window.onload = () => {
  searchPokemon();
};
