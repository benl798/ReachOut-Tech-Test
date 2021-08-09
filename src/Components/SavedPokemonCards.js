import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "./Card";
import PropTypes from "prop-types"; // ES6

const useStyles = makeStyles({
  root: {
    display: "grid",
    width: "100%",
    justifyContent: "center",
    gridTemplateColumns: "auto auto auto",
    gap: "2rem",
    paddingTop: "1rem",
  },
});

const SavedPokemonCards = ({ deletePokemonHandler, pokemonList }) => {
  const classes = useStyles();

  const pokemonTable = pokemonList.map((pokemon) => (
    <Card pokemon={pokemon} deletePokemonHandler={deletePokemonHandler} />
  ));

  return <div className={classes.root}>{pokemonTable}</div>;
};

SavedPokemonCards.propTypes = {
  deletePokemonHandler: PropTypes.func,
  pokemonList: PropTypes.object,
};

export default SavedPokemonCards;
