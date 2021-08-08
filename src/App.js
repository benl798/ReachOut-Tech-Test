import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Button } from "@material-ui/core";
import PokemonCard from "./Components/PokemonCard";
import SavedPokemonCards from './Components/SavedPokemonCards';
import "./App.css";

const useStyles = makeStyles({
  root: {
      margin: '1rem',
  },
  button: {
    border: "1px solid red",
    margin: '1rem'
  },
});

const App = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const axios = require("axios");
  const [displayedPokemonStats, setDisplayedPokemonStats] = useState({});
  const [savedPokemon, setSavedPokemon] = useState([]);
  const [displaySavedImages, setDisplaySavedImages] = useState(false);

  const generateRandomNumber = (max) => Math.floor(Math.random() * max);

  const searchPokemon = (props) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props}/`)
      .then(function (response) {
        setDisplayedPokemonStats(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
  };

  console.log(displayedPokemonStats);

  if (loading) return <h1>Loading Pokemon Index...</h1>;

  return (
    <div className={classes.root}>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => {searchPokemon(generateRandomNumber(1199)); setDisplaySavedImages(false)}}
        >
          Search random Pokemon
        </Button>
        <TextField
          variant="outlined"
          label="Search Pokemon Index "
          onChange={(event) => setSearchedPokemon(event.target.value)}
        />
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => {searchPokemon(searchedPokemon); setDisplaySavedImages(false)}}
        >
          Search Pokemon Index
        </Button>
        <Button 
          variant="contained" 
          color="secondary"
          className={classes.button}
          onClick={() => setDisplaySavedImages(true)}>
          My saved Pokemon
        </Button>
        {displaySavedImages ? (
          <SavedPokemonCards />
        ) : (
          <PokemonCard
            displayedPokemon={displayedPokemonStats}
          />
        )}
      </div>
  );
};

export default App;
