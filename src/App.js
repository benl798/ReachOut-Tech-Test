import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Button } from "@material-ui/core";
import PokemonCard from "./Components/PokemonCard";
import SavedPokemon from "./Components/SavedPokemon";
import "./App.css";

const useStyles = makeStyles({
  buttons: {
    border: "10px solid red",
  },
});

const App = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const axios = require("axios");
  const [displayedPokemonStats, setDisplayedPokemonStats] = useState({});
  const [savedPokemon, setSavedPokemon] = useState([]);
  const [noSavedImages, setNoSavedImages] = useState(true);
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

  // const displayErrorMessage = () => {
  //   console.log("working!");
  // };

  if (loading) return <h1>Loading Pokemon Index...</h1>;

  // console.log(savedPokemon.length);

  return (
    <div className="App">
      <div className={classes.buttons}>
        <Button
          variant="outlined"
          onClick={() => searchPokemon(generateRandomNumber(1199))}
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
          onClick={() => searchPokemon(searchedPokemon)}
        >
          Search Pokemon Index
        </Button>
        <Button
          variant="outlined"
          disabled={noSavedImages}
          onClick={() => setDisplaySavedImages(true)}
        >
          My saved Pokemon
        </Button>
        <PokemonCard setNoSavedImages={setNoSavedImages} displayedPokemon={displayedPokemonStats} savedPokemon={savedPokemon}/>
        {savedPokemon?.length
          ? [savedPokemon.map((pokemon) => <div>{pokemon.name}</div>)]
          : null}
        {displaySavedImages ? <SavedPokemon savedPokemon={savedPokemon}/> : null}
      </div>
    </div>
  );
};

export default App;
