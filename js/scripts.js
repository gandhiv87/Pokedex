let pokemonRepository = (function() {
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('.pokemon-details-modal');

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

    button.classList.add('button-class');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemon-modal');
    // button.classList.add('btn');

    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  };

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  };

  function loadDetails (pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json()
    }).then(function(details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.weight = details.weight;
      pokemon.types = [];
      for (var i = 0; i < details.types.length; i++) {
        pokemon.types.push(details.types[i].type.name);
      }
    }).catch(function (e) {
      console.error(e);
    });
  };

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showDetailsModal(pokemon);
    });
  };

  function showDetailsModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    // Clear existing content of the modal
    modalTitle.empty();
    modalBody.empty();

    // Create element for name in modal content
    let name = $("<h1>" + pokemon.name + "</h1>");

    // Create element for image in modal content
    let image = $('<img class="modal-img" style="width:50%">');
    image.attr("src", pokemon.imageUrl);

    // Create element for height in modal content
    let height = $("<p>" + "Height: " + pokemon.height + "</p>");

    // Create element for weight in modal content
    let weight = $("<p>" + "Weight: " + pokemon.weight + "</p>");

    // Create element for types in modal content
    let types = $("<p>" + "Types: " + pokemon.types + "</p>");

    modalTitle.append(name);
    modalBody.append(image);
    modalBody.append(height);
    modalBody.append(weight);
    modalBody.append(types);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList : loadList,
    loadDetails : loadDetails,
    showDetails : showDetails,
    showDetailsModal : showDetailsModal,
  };

})();

pokemonRepository.loadList().then(function()
{
  pokemonRepository.getAll().forEach(function(pokemon)
  {
    pokemonRepository.addListItem(pokemon);
  });
});
