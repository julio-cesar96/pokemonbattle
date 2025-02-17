import { useState } from "react";
import { fetchPokemons } from "../services/battleService";
import { PokemonData } from "../types/pokemonData.types";


interface PokemonState {
  name: string;
  data: PokemonData | null;
}

export const usePokemonBattle = () => {
  const [pokemons, setPokemons] = useState<{ first: PokemonState; second: PokemonState }>({
    first: { name: "", data: null },
    second: { name: "", data: null },
  });
  const [winner, setWinner] = useState<string | null>(null);


  const startBattle = async () => {
    const result = await fetchPokemons(pokemons.first.name, pokemons.second.name);
    if (result) {
      setPokemons({ first: result.first, second: result.second });
      setWinner(result.winner);
    }
  };

  return { pokemons, setPokemons, winner, startBattle };
};
