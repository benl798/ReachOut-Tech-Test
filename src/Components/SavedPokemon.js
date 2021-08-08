import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import SavedPokemonCards from "./SavedPokemonCards";

const SavedPokemon = ({ savedPokemon }) => {
  const [pokemonLiked, setPokemonLiked] = useState(false);

  // console.log(savedPokemon.length > 0 ? true : false);

  // render no pokemon message or saved images

  return (
    <div>
      {/* {savedPokemon?.length ? ( */}
        <SavedPokemonCards savedPokemon={savedPokemon} />
      {/* ) : (
        <h1>no saved images</h1>
      )} */}
    </div>
  );
};

SavedPokemon.propTypes = {
  savedPokemon: PropTypes.object.isRequired,
};

export default SavedPokemon;
