import axios from "axios";
import { PokemonData } from "../types/pokemonData.types";
import { BASE_URL_POKE_API } from "../utils/consts";

export const getPokemonData = async (name: string): Promise<PokemonData | null> => {
    try {
        const apiResponse = axios.get<PokemonData>(`${BASE_URL_POKE_API}/pokemon/${name.toLowerCase()}`);
        return (await apiResponse).data;
    } catch (error) {
        console.error("Erro ao buscar os dados", error);
        return null;
    }
};