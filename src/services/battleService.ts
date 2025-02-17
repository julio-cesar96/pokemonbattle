import { getPokemonData } from "./pokeApi";
import { PokemonData } from "../types/pokemonData.types";

export const fetchPokemons = async (firstName: string, secondName: string) => {
  try {
    const firstPokemon = await getPokemonData(firstName.toLowerCase());
    const secondPokemon = await getPokemonData(secondName.toLowerCase());

    if (firstPokemon && secondPokemon) {
      return {
        first: { name: firstName, data: firstPokemon },
        second: { name: secondName, data: secondPokemon },
        winner: determineWinner(firstPokemon, secondPokemon),
      };
    }
  } catch (error) {
    console.error("Erro ao buscar Pokémons:", error);
    return null;
  }
};


const determineWinner = (firstPokemon: PokemonData, secondPokemon: PokemonData) => {
  const power1 = firstPokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0);
  const power2 = secondPokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0);

  return power1 > power2 ? firstPokemon.name : power2 > power1 ? secondPokemon.name : "Empate!";
};
