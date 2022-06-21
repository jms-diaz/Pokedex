const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#EE8130',
    grass: '#7AC74C',
	electric: '#F7D02C',
	water: '#6390F0',
	ground: '#E2BF65',
	rock: '#B6A136',
	fairy: '#D685AD',
	poison: '#A33EA1',
	bug: '#A6B91A',
	dragon: '#6F35FC',
	psychic: '#F95587',
	flying: '#A98FF3',
	fighting: '#C22E28',
	normal: '#A8A77A'
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    const image = pokemon.sprites.front_default;
    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]

    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="${image}" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)
}

fetchPokemons()