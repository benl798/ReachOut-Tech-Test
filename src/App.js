import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import PokemonCard from "./Components/PokemonCard";
import SavedPokemonCards from "./Components/SavedPokemonCards";
import Buttons from "./Components/Buttons";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, deletePokemon } from "./store/slices/pokemonSlice";
import { nanoid } from "nanoid";
import "./App.css";

const useStyles = makeStyles({
  root: {
    margin: "1rem",
    fontWeight: 600,
  },
  button: {
    border: "1px solid red",
    margin: "1rem",
  },
  divider: {
    background: "#F73718",
    height: "0.5vh",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const App = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [displayedPokemonStats, setDisplayedPokemonStats] = useState([]);
  const [displaySavedImages, setDisplaySavedImages] = useState(false);
  const [pokemonSaved, setPokemonSaved] = useState(false);
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemon.pokemon);

  if (loading) return <h1>Loading Pokemon Index...</h1>;

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

  console.log(pokemonSaved);
  
  return (
    <div className={classes.root}>
      <Typography>ReachOut Pokemon Index</Typography>
      <Buttons
        setDisplayedPokemonStats={setDisplayedPokemonStats}
        setDisplaySavedImages={setDisplaySavedImages}
        setPokemonSaved={setPokemonSaved}
      />
      <Divider variant="middle" classes={{ root: classes.divider }} />
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
  );
};

export default App;
