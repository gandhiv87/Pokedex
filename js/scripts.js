let pokemonList = [
  {name: 'Bulbasur', height: 2.04, types: ['grass', 'poison']},
  {name: 'Charmander', height: 2, types: ['fire']},
  {name: 'Gengar', height: 4.11, types: ['ghost', 'poison']},
  {name: 'Squirtle', height: 1.08, types: ['water']},
  {name: 'Pikachu', height: 1.04, types: ['electric']},
  {name: 'Dragonite', height: 7.03, types: ['dragon', 'flying']},
];

pokemonList.forEach(function(pokemon)
{
  if (pokemon.height >= 4)
  {
    document.write(pokemon.name + '\'s height is ' + pokemon.height + ' feet!' + ' - WOW, that\'s big!!!' + '<br>');
  }
  else if (pokemon.height <= 1.2)
  {
    document.write(pokemon.name + '\'s height is ' + pokemon.height + ' feet!' + ' - That\'s tiny!!!' + '<br>');
  }
  else
  {
    document.write(pokemon.name + '\'s height is ' + pokemon.height + ' feet!' + '<br>');
  }
});
