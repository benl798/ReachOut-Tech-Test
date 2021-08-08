import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import PokemonCard from "./Components/PokemonCard";
import SavedPokemonCards from "./Components/SavedPokemonCards";
import Buttons from "./Components/Buttons";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import "./App.css";

const useStyles = makeStyles({
  root: {
    margin: "1rem",
    fontWeight: 600
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
  const [displayedPokemonStats, setDisplayedPokemonStats] = useState({});
  const [displaySavedImages, setDisplaySavedImages] = useState(false);

  if (loading) return <h1>Loading Pokemon Index...</h1>;

  return (
    <div className={classes.root}>
      <Typography>ReachOut Pokemon Index</Typography>
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
