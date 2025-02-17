import { Suspense, lazy } from "react";
import { usePokemonBattle } from "../hooks/usePokemonBattle";


const Input = lazy(() => import("../components/Input/Input"));
const PokemonDetails = lazy(() => import("../components/PokemonDetails/PokemonDetails"));
const WinnerAnnouncement = lazy(() => import("../components/WinnerAnnouncement/WinnerAnnouncement"));
const Button = lazy(() => import("../components/Button/Button"));

const PokemonBattle: React.FC = () => {
  const { pokemons, setPokemons, winner, startBattle } = usePokemonBattle();

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">🔥 Batalha de Pokémons! 🔥</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Suspense fallback={<div>Carregando...</div>}>
          <Input
            value={pokemons.first.name}
            onChange={(e) => setPokemons({ ...pokemons, first: { name: e.target.value, data: null } })}
            placeholder="Primeiro Pokémon"
          />
          <Input
            value={pokemons.second.name}
            onChange={(e) => setPokemons({ ...pokemons, second: { name: e.target.value, data: null } })}
            placeholder="Segundo Pokémon"
          />
        </Suspense>
      </div>

  
      <Suspense fallback={<div>Carregando botão...</div>}>
        <Button onClick={startBattle} label="Batalhar" />
      </Suspense>

      {pokemons.first.data && pokemons.second.data && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
          <Suspense fallback={<div>Carregando detalhes...</div>}>
            <PokemonDetails data={pokemons.first.data} />
            <PokemonDetails data={pokemons.second.data} />
          </Suspense>
        </div>
      )}

      {winner && (
        <Suspense fallback={<div>Carregando vencedor...</div>}>
          <WinnerAnnouncement winner={winner} />
        </Suspense>
      )}
    </div>
  );
};

export default PokemonBattle;
