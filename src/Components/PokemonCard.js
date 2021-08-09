import React from "react";
import PropTypes from "prop-types"; // ES6
import Card from "./Card";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "grid",
    justifyContent: "center",
    paddingTop: "1rem",
    // position in the middle
  },
});

const PokemonCard = ({ displayedPokemon, addPokemonHandler, pokemonSaved, setPokemonSaved }) => {
  const classes = useStyles();

  if (!displayedPokemon || Object.keys(displayedPokemon).length === 0)
    return null;

  const displayedPokemonCard = displayedPokemon.map((pokemon) => (
    <Card
      pokemon={pokemon}
      addPokemonHandler={addPokemonHandler}
      displayingMyPokedex={false}
      pokemonSaved={pokemonSaved}
      setPokemonSaved={setPokemonSaved}
    />
  ));

  return <div className={classes.root}>{displayedPokemonCard}</div>;
};

PokemonCard.propTypes = {
  displayedPokemon: PropTypes.array.isRequired,
  addPokemonHandler: PropTypes.func,
  pokemonSaved: PropTypes.bool,
  setPokemonSaved: PropTypes.func,
};

export default PokemonCard;
