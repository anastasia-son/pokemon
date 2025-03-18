import {Pokemon} from '../api/hooks';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  onClickDetail: (id: number) => void;
  data: Pokemon[];
}

function PokemonList({data, onClickDetail}: PokemonListProps) {
  return (
    <ul className="row list-unstyled">
      {data.map((pokemon: Pokemon) => {
        return (
          <li
            key={pokemon.id}
            className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex "
          >
            <PokemonCard pokemon={pokemon} onClickDetail={onClickDetail} />
          </li>
        );
      })}
    </ul>
  );
}

export default PokemonList;
