import { PokemonDetailsProps } from "./PokemonDetails.types";

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
      <img
        src={data.sprites.front_default}
        alt={data.name}
        className="w-32 h-32 mb-4"
      />
      <h2 className="text-xl font-bold capitalize">{data.name}</h2>
      <div className="w-full mt-4">
        {data.stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <span className="w-24 font-medium">{stat.stat.name}:</span>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${stat.base_stat}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetails;
