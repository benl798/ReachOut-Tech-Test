import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import PokemonCard from "./Components/PokemonCard";
import SavedPokemonCards from "./Components/SavedPokemonCards";
import Buttons from "./Components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, deletePokemon } from "./store/slices/pokemonSlice";
import pokemonBackground from './Images/pokemonBackground.png'
import { nanoid } from "nanoid";
import "./App.css";

const useStyles = makeStyles({
  root: {
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '100vh',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    paddingTop: '3rem',
    backgroundImage: `url(${pokemonBackground})`,
  },
});

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemon.pokemon);

  const [displayedPokemonStats, setDisplayedPokemonStats] = useState([]);
  const [displaySavedImages, setDisplaySavedImages] = useState(false);
  const [pokemonSaved, setPokemonSaved] = useState(false);
  const [displayAlertMessage, setDisplayAlertMessage] = useState(false);

  const addPokemonHandler = (e, pokemon) => {
    e.preventDefault();
    dispatch(
      addPokemon({
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        types: pokemon.types,
        abilities: pokemon.abilities,
        hp: pokemon.stats[0],
        id: nanoid(),
      })
    );
  };

  const deletePokemonHandler = (id) => {
    dispatch(deletePokemon(id));
  };

  return (
    <div className={classes.root}>
      <Buttons
        setDisplayedPokemonStats={setDisplayedPokemonStats}
        setDisplaySavedImages={setDisplaySavedImages}
        setPokemonSaved={setPokemonSaved}
        setDisplayAlertMessage={setDisplayAlertMessage}
      />
      <div className={classes.results}>
      {displaySavedImages ? (
        <SavedPokemonCards
          setDisplaySavedImages={setDisplaySavedImages}
          deletePokemonHandler={deletePokemonHandler}
          pokemonList={pokemonList}
        />
      ) : (
        <PokemonCard
          displayedPokemon={displayedPokemonStats}
          addPokemonHandler={addPokemonHandler}
          pokemonSaved={pokemonSaved}
          setPokemonSaved={setPokemonSaved}
        />
      )}
      </div>
      {displayAlertMessage ? 
      <h1>yes</h1> : <h1>no</h1>}
    </div>
  );
};

export default App;
