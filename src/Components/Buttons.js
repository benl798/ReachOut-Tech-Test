import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types"; // ES6

const useStyles = makeStyles({
  root: {
    padding: "1rem",
    margin: "auto",
    width: "60%",
    display: "flex",
    flexWrap: "wrap",
    columnGap: 12,
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
    background: "rgb(255, 203, 5)",
    "&:hover": {
      background: "rgb(199, 160, 8)",
      border: "3px solid rgb(60, 90, 166)",
    },
    border: "3px solid rgb(61,125,202)",
    color: "black",
  },
});

const Buttons = ({ setDisplayedPokemonStats, setDisplaySavedImages }) => {
  const classes = useStyles();
  const axios = require("axios");
  const generateRandomNumber = (max) => Math.floor(Math.random() * max);
  const [searchedPokemon, setSearchedPokemon] = useState("");

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

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => {
          searchPokemon(generateRandomNumber(1199));
          setDisplaySavedImages(false);
        }}
      >
        Search random Pokemon
      </Button>
      {/* <TextField
        variant="outlined"
        label="Search Pokemon Index "
        className={classes.button}
        onChange={(event) => setSearchedPokemon(event.target.value)}
      /> */}
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          searchPokemon(searchedPokemon);
          setDisplaySavedImages(false);
        }}
      >
        Search Pokemon Index
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => setDisplaySavedImages(true)}
      >
        My saved Pokemon
      </Button>
    </div>
  );
};

Buttons.propTypes = {
  setDisplayedPokemonStats: PropTypes.func.isRequired,
  setDisplaySavedImages: PropTypes.func.isRequired,
};

export default Buttons;
