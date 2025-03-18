import {useCallback, useEffect, useState} from 'react';
import {useFetchPokemonTypes} from '../api/hooks';
import Loader from './Loader';
import FilterBtn from './FilterBtn';

interface PokemonFilterParams {
  onChange: (typeIds: number[]) => void;
}

function PokemonFilter({onChange}: PokemonFilterParams) {
  const {loading, data} = useFetchPokemonTypes();

  const [selectedTypes, setSelectedTypes] = useState<number[]>([]);

  const onClickType = useCallback((id: number) => {
    setSelectedTypes(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  const resetFilter = useCallback(() => {
    setSelectedTypes([]);
  }, []);

  useEffect(() => {
    onChange(selectedTypes);
  }, [selectedTypes, onChange]);

  return (
    <>
      {loading && <Loader />}

      <div className="d-flex flex-wrap mb-4">
        {data?.pokemon_v2_type?.map(type => (
          <FilterBtn
            key={type.id}
            id={type.id}
            title={type.name}
            onClick={onClickType}
            isActive={!!selectedTypes.includes(type.id)}
          />
        ))}
        <button
          className="btn btn-danger btn-sm rounded-5 mb-2 font-weight-bold"
          type="button"
          onClick={resetFilter}
        >
          reset
        </button>
      </div>
    </>
  );
}

export default PokemonFilter;
