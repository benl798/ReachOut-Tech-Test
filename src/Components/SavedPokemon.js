import React from "react";
import PropTypes from "prop-types"; // ES6


const SavedPokemon = ({savedPokemon}) => {
    console.log(savedPokemon);
  return <div><h1>working!</h1></div>;
};

SavedPokemon.propTypes = {
    savedPokemon: PropTypes.object.isRequired,
}

export default SavedPokemon;
