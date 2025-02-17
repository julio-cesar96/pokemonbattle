export interface PokemonData {
    name: string;
    id: number;
    sprites: {
        front_default: string;
    }
    stats: {
        base_stat: number;
        stat: {
            name: string;
        }
    }[]
}