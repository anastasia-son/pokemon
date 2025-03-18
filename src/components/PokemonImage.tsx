interface PokemonImageProps {
  path: string;
  className?: string;
}

function PokemonImage({path, className}: PokemonImageProps) {
  return (
    <div className={className}>
      <img src={path} className="m-w-100" alt="picture" />
    </div>
  );
}

export default PokemonImage;
