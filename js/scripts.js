var pokemonRepository = (function() {
  let repository = [
    {
      name: 'Bulbasur',
      height: 2.04,
      types: ['grass', 'poison']
    },
    {
      name: 'Charmander',
      height: 2,
      types: ['fire']
    },
    {
      name: 'Gengar',
      height: 4.11,
      types: ['ghost', 'poison']
    },
    {
      name: 'Squirtle',
      height: 1.08,
      types: ['water']
    },
    {
      name: 'Pikachu',
      height: 1.04,
      types: ['electric']
    },
    {
      name: 'Dragonite',
      height: 7.03,
      types: ['dragon', 'flying']
    },
  ];

  function add(pokemon) {
    repository.push(pokemon);
  };

  function getAll() {
    return repository;
  };

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;

    button.addEventListener('click', function() {
      showDetails(pokemon);
    })

    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  };

  function showDetails(pokemon){
    console.log(pokemon.name);
  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };

})();

pokemonRepository.getAll().forEach(function(pokemon)
{
  pokemonRepository.addListItem(pokemon);
});
