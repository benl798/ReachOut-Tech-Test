import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "./Card";
import PropTypes from "prop-types";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  root: {
    display: "grid",
    width: "100%",
    justifyContent: "center",
    gridTemplateColumns: "auto auto auto",
    gap: "2rem",
    paddingTop: "1rem",
  },
  alert: {
    border: '2px solid black',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: '1rem',
    width: '50%',
    fontWeight: 600
  }
});

const SavedPokemonCards = ({ deletePokemonHandler, pokemonList }) => {
  const classes = useStyles();

  if (pokemonList.length === 0)
    return (
      <Alert className={classes.alert} variant="filled" severity="info">
        You currently have no saved Pokemon, 'Search Random Pokemon' to add them to your Pokedex!
      </Alert>
      // Nice to have/WWON -> Manage crossovers between alert messages
    );

  const pokemonTable = pokemonList.map((pokemon) => (
    <Card pokemon={pokemon} deletePokemonHandler={deletePokemonHandler} />
  ));

  return <div className={classes.root}>{pokemonTable}</div>;
};

SavedPokemonCards.propTypes = {
  deletePokemonHandler: PropTypes.func,
  pokemonList: PropTypes.array,
};

export default SavedPokemonCards;
