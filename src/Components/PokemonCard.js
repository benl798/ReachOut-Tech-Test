import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";

const PokemonCard = ({ displayedPokemon, savedPokemon, setNoSavedImages }) => {
  const [pokemonLiked, setPokemonLiked] = useState(false);
  if (!displayedPokemon || Object.keys(displayedPokemon).length === 0)
    return null;

  const saveThisPokemon = () => {
    savedPokemon.push(displayedPokemon);
    setNoSavedImages(false);
  };

  const removeThisPokemon = () => {
    savedPokemon.pop();
    setPokemonLiked(false);
  };

  // if (savedPokemon.some((pokemon) => pokemon.name === displayedPokemon.name)) pokemonLiked(false);

  return (
    <div>
      {pokemonLiked ? (
        <IconButton onClick={removeThisPokemon}>
          <FavoriteIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            setPokemonLiked(true);
            saveThisPokemon();
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
      )}
      <h1>{displayedPokemon.name}</h1>
      {displayedPokemon.types.map((type) => (
        <div>{type.type.name}</div>
      ))}
      <img src={displayedPokemon.sprites.front_default} alt="Pokemon sprite" />
    </div>
  );
};

PokemonCard.propTypes = {
  displayedPokemon: PropTypes.object.isRequired,
  savedPokemon: PropTypes.array.isRequired,
  setNoSavedImages: PropTypes.bool.isRequired,
};

export default PokemonCard;
