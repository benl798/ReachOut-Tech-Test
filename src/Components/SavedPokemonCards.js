import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePokemon } from "../store/slices/pokemonSlice";
import { makeStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Card from './Card';

const useStyles = makeStyles({
  root: {
    display: "grid",
    width: '100%',
    justifyContent: "center",
    gridTemplateColumns: "auto auto auto",
    gap: '2rem',
    paddingTop: "1rem",
  },
});

const SavedPokemonCards = () => {
  const classes = useStyles();
  const pokemonList = useSelector((state) => state.pokemon.pokemon);
  const dispatch = useDispatch();

  const deletePokemonHandler = (id) => {
    dispatch(deletePokemon(id));
  };

  const pokemonTable = pokemonList.map((pokemon) => (
    <Card pokemon={pokemon} />
  ));

  return <div className={classes.root}>{pokemonTable}</div>;
};

export default SavedPokemonCards;
