import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Button } from "@material-ui/core";
import PokemonCard from "./Components/PokemonCard";
import SavedPokemonCards from "./Components/SavedPokemonCards";
import Buttons from "./Components/Buttons";
import Divider from "@material-ui/core/Divider";
import "./App.css";

const useStyles = makeStyles({
  root: {
    margin: "1rem",
  },
  button: {
    border: "1px solid red",
    margin: "1rem",
  },
  divider: {
    background: '#F73718',
    height: '0.5vh',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const App = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const axios = require("axios");
  const [displayedPokemonStats, setDisplayedPokemonStats] = useState({});
  const [savedPokemon, setSavedPokemon] = useState([]);
  const [displaySavedImages, setDisplaySavedImages] = useState(false);

  if (loading) return <h1>Loading Pokemon Index...</h1>;

  return (
    <div className={classes.root}>
      <Buttons
        setDisplayedPokemonStats={setDisplayedPokemonStats}
        setDisplaySavedImages={setDisplaySavedImages}
      />
      <Divider variant="middle" classes={{root: classes.divider}}/>
      {displaySavedImages ? (
        <SavedPokemonCards />
      ) : (
        <PokemonCard displayedPokemon={displayedPokemonStats} />
      )}
    </div>
  );
};

export default App;
