import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types"; // ES6

const useStyles = makeStyles({
  root: {
    display: "grid",
    width: "100%",
    justifyContent: "center",
    gridTemplateColumns: "auto auto auto",
    gap: "2rem",
  },
  button: {
    width: "100%",
    cursor: "pointer",
    height: 60,
    display: "flex",
    maxWidth: 250,
    padding: "8px 16px 8px 12px",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    border: "5px solid #CC0000",
    background: "#F73718",
    "&:hover": {
      border: '5px solid black',
      background: "#F73718",
    },
    color: "white",
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 1.25,
  },
});

const Buttons = ({ setDisplayedPokemonStats, setDisplaySavedImages, setPokemonSaved }) => {
  const classes = useStyles();
  const axios = require("axios");
  const generateRandomNumber = (max) => Math.floor(Math.random() * max);

  const searchPokemon = (props) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props}/`)
      .then(function (response) {
        setDisplayedPokemonStats([...[], response.data]);
        setPokemonSaved(false);
      })
      .catch(function (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
  };

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => {
          searchPokemon(generateRandomNumber(1199));
          setDisplaySavedImages(false);
        }}
      >
        Search random Pokemon
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => setDisplaySavedImages(true)}
      >
        My Pokedex
      </Button>
    </div>
  );
};

Buttons.propTypes = {
  setDisplayedPokemonStats: PropTypes.func.isRequired,
  setDisplaySavedImages: PropTypes.func.isRequired,
  setPokemonSaved: PropTypes.func
};

export default Buttons;
