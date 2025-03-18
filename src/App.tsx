import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Pokemon, useFetchPokemons} from './api/hooks';
import PokemonFilter from './components/PokemonFilter';
import Loader from './components/Loader';
import {useCallback, useEffect, useState} from 'react';
import PokemonDetail from './components/PokemonDetail';
import PokemonList from './components/PokemonList';

function App() {
  const {loading, data} = useFetchPokemons(150, 1, 150);

  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>();
  const [showDetail, setShowDetail] = useState(false);
  const [showDetailId, setShowDetailId] = useState<number | null>();
  const [selectedTypes, setSelectedTypes] = useState<number[]>([]);

  const onChangeFilter = useCallback((typeIds: number[]) => {
    setSelectedTypes(typeIds);
  }, []);

  const onClickDetail = useCallback((id: number) => {
    setShowDetail(true);
    setShowDetailId(id);
  }, []);
  const onCloseDetail = useCallback(() => {
    setShowDetail(false);
    setShowDetailId(null);
  }, []);

  useEffect(() => {
    const filtered = data?.pokemon_v2_pokemon.filter(pokemon => {
      const pokemonTypeIds = pokemon.pokemon_v2_pokemontypes.map(
        type => type.pokemon_v2_type.id,
      );
      return selectedTypes.every(type => pokemonTypeIds.includes(type));
    });

    setFilteredPokemons(filtered);
  }, [selectedTypes, data?.pokemon_v2_pokemon]);

  return (
    <>
      <div className="pt-4 pb-4">
        <div className="container mx-auto">
          <h1 className="mb-4">Pokemons</h1>
          {loading && <Loader />}
          <PokemonFilter onChange={onChangeFilter} />

          {!!filteredPokemons?.length && (
            <PokemonList
              data={filteredPokemons}
              onClickDetail={onClickDetail}
            />
          )}
        </div>
      </div>

      {showDetailId && (
        <PokemonDetail
          show={showDetail}
          onHide={onCloseDetail}
          pokemonId={showDetailId}
        />
      )}
    </>
  );
}

export default App;
