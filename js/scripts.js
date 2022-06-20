let pokemonList = [
  {name: 'Bulbasur', height: '2.04', types: ['grass', 'poison']},
  {name: 'Charmander', height: '2.00', types: ['fire']},
  {name: 'Squirtle', height: '1.08', types: ['water']},
  {name: 'Pikachu', height: '1.04', types: ['electric']},
  {name: 'Gengar', height: '4.11', types: ['ghost', 'poison']},
  {name: 'Dragonite', height: '7.03', types: ['dragon', 'flying']},
];

for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + 's ' + 'height is ' + pokemonList[i].height + '! ');
}
