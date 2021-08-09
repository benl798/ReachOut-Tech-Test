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
    height: 60,
    maxWidth: 250,
    fontSize: 18,
    borderRadius: 50,
    lineHeight: 1.25,
    fontWeight: 600,
    width: "100%",
    cursor: "pointer",
    display: "flex",
    padding: "8px 16px 8px 12px",
    alignItems: "center",
    justifyContent: "center",
    border: "5px solid #CC0000",
    color: "white",
    background: "#F73718",
    "&:hover": {
      border: '5px solid black',
      background: "#F73718",
    },
  },
});

const Buttons = ({ setDisplayedPokemonStats, setDisplaySavedImages, setPokemonSaved, setDisplayAlertMessage }) => {
  const classes = useStyles();
  const axios = require("axios");
  const generateRandomNumber = (max) => Math.floor(Math.random() * max);

  const searchPokemon = (props) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props}/`)
      .then(function (response) {
        setDisplayedPokemonStats([...[], response.data]);
        setPokemonSaved(false);
        setDisplayAlertMessage(false);
      })
      .catch(function (error) {
        setDisplayAlertMessage(true);
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
        onClick={() => {setDisplaySavedImages(true); setDisplayAlertMessage(false);}}
      >
        My Pokedex
      </Button>
    </div>
  );
};

Buttons.propTypes = {
  setDisplayedPokemonStats: PropTypes.func.isRequired,
  setDisplaySavedImages: PropTypes.func.isRequired,
  setPokemonSaved: PropTypes.func.isRequired,
  setDisplayAlertMessage: PropTypes.func.isRequired,
};

export default Buttons;
