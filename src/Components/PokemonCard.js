import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, deletePokemon } from "../store/slices/pokemonSlice";
import { nanoid } from "nanoid";

const PokemonCard = ({ displayedPokemon }) => {
  const [pokemonLiked, setPokemonLiked] = useState(false);
  const pokemonList = useSelector((state) => state.pokemon.pokemon);
  const dispatch = useDispatch();

  if (!displayedPokemon || Object.keys(displayedPokemon).length === 0)
    return null;

  // remove liked icon from displayCard if removed in state 
  // remove from state object if unliked

  const deletePokemonHandler = (id) => {
    dispatch(deletePokemon(id));
  };

  const addPokemonHandler = (e) => {
    e.preventDefault();
    dispatch(
      addPokemon({
        name: displayedPokemon.name,
        image: displayedPokemon.sprites.front_default,
        types: displayedPokemon.types,
        id: nanoid(),
      })
    );
  };

  return (
    <div>
      {pokemonLiked ? (
        <IconButton
          onClick={() => setPokemonLiked(false)}
        >
          <FavoriteIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={(e) => {
            setPokemonLiked(true);
            addPokemonHandler(e);
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
};

export default PokemonCard;
