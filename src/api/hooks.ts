import {useQuery} from '@apollo/client';
import {FETCH_POKEMON_DETAIL, FETCH_POKEMONS, FETCH_TYPES} from './queries';

type PokemonType = {
  id: number;
  name: string;
};

type PokemonTypeNested = {
  pokemon_v2_type: PokemonType;
};

type PokemonSprites = {
  sprites: {front_default: string};
};
export type Pokemon = {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: PokemonTypeNested[];
  pokemon_v2_pokemonsprites: PokemonSprites[];
};

type PokemonDetail = {
  id: number;
  name: string;
  pokemon_v2_pokemonspecy: PokemonSpecy;
  pokemon_v2_pokemonsprites: PokemonSprites[];
};
type PokemonSpecy = {
  base_happiness: number;
  capture_rate: number;
  hatch_counter: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
};

type PokemonQueryResponse = {
  pokemon_v2_pokemon: Pokemon[];
};

type TypesQueryResponse = {
  pokemon_v2_type: PokemonType[];
};

type PokemonDetailQueryResponse = {
  pokemon_v2_pokemon_by_pk: PokemonDetail;
  pokemon_v2_pokemonsprites_by_pk: PokemonSprites;
};

export const useFetchPokemons = (limit = 10, fromId = 0, toId = 100) => {
  return useQuery<PokemonQueryResponse>(FETCH_POKEMONS, {
    variables: {limit, fromId, toId},
    fetchPolicy: 'cache-and-network',
  });
};

export const useFetchPokemonTypes = () => {
  return useQuery<TypesQueryResponse>(FETCH_TYPES, {
    fetchPolicy: 'cache-and-network',
  });
};

export const useFetchPokemonDetail = (id: number) => {
  return useQuery<PokemonDetailQueryResponse>(FETCH_POKEMON_DETAIL, {
    variables: {id},
    fetchPolicy: 'cache-and-network',
  });
};
