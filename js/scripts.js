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

    button.classList.add("button-class");
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
      pokemon.types = details.types;
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

    // Clear all existing modal content
    modalContainer.innerText = '';

    // Add the new modal content
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButton = document.createElement('button');
    closeButton.classList.add('modal-close');
    closeButton.innerText = 'Close';
    closeButton.addEventListener('click', hideModal);

    let name = document.createElement('h1');
    name.innerText = pokemon.name;

    let height = document.createElement('p');
    height.innerText = pokemon.height;

    let image = document.createElement('img');
    image.src = pokemon.imageUrl;

    modal.appendChild(closeButton);
    modal.appendChild(name);
    modal.appendChild(height);
    modal.appendChild(image);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  })

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList : loadList,
    loadDetails : loadDetails,
    showDetails : showDetails,
  };

})();

pokemonRepository.loadList().then(function()
{
  pokemonRepository.getAll().forEach(function(pokemon)
  {
    pokemonRepository.addListItem(pokemon);
  });
});
