import {gql} from '@apollo/client';

export const FETCH_POKEMONS = gql`
  query fetchPokemonsList($limit: Int!, $fromId: Int, $toId: Int) {
    pokemon_v2_pokemon(
      limit: $limit
      where: {id: {_gte: $fromId, _lte: $toId}}
    ) {
      id
      name
      pokemon_v2_pokemonsprites {
        id
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`;

export const FETCH_TYPES = gql`
  query fetchPokemonsTypes {
    pokemon_v2_type {
      id
      name
    }
  }
`;

export const FETCH_POKEMON_DETAIL = gql`
  query fetchPokemonDetail($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      pokemon_v2_pokemonspecy {
        id
        base_happiness
        capture_rate
        is_baby
        is_legendary
        is_mythical
      }
    }
    pokemon_v2_pokemonsprites_by_pk(id: $id) {
      id
      sprites
    }
  }
`;
