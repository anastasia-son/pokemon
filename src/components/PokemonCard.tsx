import {Pokemon} from '../api/hooks';
import PokemonImage from './PokemonImage';
import TypeBadge from './TypeBadge';

interface PokemonProps {
  pokemon: Pokemon;
  onClickDetail: (id: number) => void;
}

function PokemonCard({pokemon, onClickDetail}: PokemonProps) {
  const path = pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default;
  return (
    <div className="card mb-4 flex-row w-100 p-3">
      <PokemonImage
        path={path}
        className="col-5 d-flex align-items-center justify-content-center"
      />
      <div className="col-7 ps-3 position-relative">
        <h5 className="card-title text-capitalize">{pokemon.name}</h5>
        <p className="text-secondary">id: {pokemon.id}</p>

        <div className="card-text d-flex flex-wrap">
          {pokemon.pokemon_v2_pokemontypes?.map((typeData, index) => {
            const type = typeData?.pokemon_v2_type;
            return (
              <TypeBadge
                key={type?.id}
                name={type?.name}
                isLast={pokemon.pokemon_v2_pokemontypes.length - 1 === index}
              />
            );
          })}
        </div>
        <button
          type="button"
          data-bs-modal="modal"
          data-bs-target="pokemon-detail"
          className="btn btn-warning mt-2"
          onClick={() => onClickDetail(pokemon.id)}
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default PokemonCard;
