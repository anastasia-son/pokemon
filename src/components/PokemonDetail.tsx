import {Button, Modal, ModalProps} from 'react-bootstrap';
import {useFetchPokemonDetail} from '../api/hooks';
import PokemonImage from './PokemonImage';
import Loader from './Loader';

type PokemonDetailProps = ModalProps & {
  pokemonId: number;
};

function PokemonDetail({pokemonId, onHide, ...rest}: PokemonDetailProps) {
  const {data, loading} = useFetchPokemonDetail(pokemonId);

  const {name, id} = data?.pokemon_v2_pokemon_by_pk || {};
  const {
    base_happiness,
    capture_rate,
    hatch_counter,
    is_baby,
    is_legendary,
    is_mythical,
  } = data?.pokemon_v2_pokemon_by_pk?.pokemon_v2_pokemonspecy || {};

  const {front_default: imagePath} =
    data?.pokemon_v2_pokemonsprites_by_pk.sprites || {};

  return (
    <Modal
      {...rest}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {loading && <Loader />}

        <h4 className="text-capitalize">{name}</h4>

        {!loading && (
          <div className="row">
            <div className="col-4">
              {!!imagePath && <PokemonImage path={imagePath} />}
            </div>

            <div className="col-8">
              <div className="mb-3">
                <span className="text-secondary ">id:</span> {id}
              </div>

              {base_happiness !== undefined && (
                <div className="row">
                  <div className="col-8 col-lg-6 text-secondary ">
                    Base Happiness
                  </div>
                  <div className="col-2 col-lg-6">{base_happiness}</div>
                </div>
              )}
              {capture_rate !== undefined && (
                <div className="row">
                  <div className="col-8 col-lg-6  text-secondary ">
                    Capture Rate
                  </div>
                  <div className="col-2 col-lg-6 ">{capture_rate}</div>
                </div>
              )}
              {hatch_counter !== undefined && (
                <div className="row">
                  <div className="col-8 col-lg-6  text-secondary text-end">
                    Hatch Counter
                  </div>
                  <div className="col-2 col-lg-6 ">{hatch_counter}</div>
                </div>
              )}
              <div className="flex py-3">
                {is_legendary && (
                  <span className="bg-warning rounded-3 p-2">legendary</span>
                )}
                {is_mythical && (
                  <span className="bg-dark text-white rounded-3 p-2 ">
                    mythical
                  </span>
                )}
                {is_baby && (
                  <span className="bg-success rounded-3 p-2">baby</span>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PokemonDetail;
