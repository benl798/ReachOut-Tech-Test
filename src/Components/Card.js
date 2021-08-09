import React from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import IconButton from "@material-ui/core/IconButton";
import MergeTypeIcon from "@material-ui/icons/MergeType";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  card: {
    width: 320,
    background: "white",
    borderRadius: 10,
    boxShadow: "0px 1px 10px 1px black",
    alignContent: "center",
    border: "5px solid black",
    textTransform: "uppercase",
    marginTop: "1rem",
    marginBottom: '1rem',
    position: "relative",
  },
  upperContainer: {
    height: 100,
    background: "#F73718",
    borderBottom: "5px solid black",
  },
  imageContainer: {
    background: "white",
    borderRadius: "50%",
    border: "5px solid black",
    transform: "translate(105px,15px)",
  },
  lowerContainer: {
    background: "white",
    textAlign: "center",
    marginTop: 60,
  },
  pillContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    margin: 0,
    padding: "0px 5px 10px",
  },
  types: {
    margin: "5px",
    backgroundColor: "#F73718",
    border: "3px solid #CC0000",
    padding: 5,
    fontWeight: 600
  },
  header: {
    fontSize: 20,
    paddingTop: 10,
    fontWeight: 600,
    },
  name: {
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: 600,
  },
  hp: {
    marginLeft: 5,
    border: "3px solid #CC0000",
    color: "white",
    backgroundColor: "#F73718",
  },
  buttons: {
    height: 0,
    top: 10,
    left: 270,
    color: "#CC0000",
    "&:hover": {
      color: "white",
      background: "none",
    },
  },
  likedButton: {
    height: 0,
    top: 10,
    left: 270,
    color: "#CC0000",
    "&:hover": {
      background: "none",
      cursor: "default",
    },
  },
});

const Card = ({ pokemon, deletePokemonHandler, displayingMyPokedex = true, addPokemonHandler, pokemonSaved, setPokemonSaved }) => {
  const classes = useStyles();

  if (!pokemon) return null;
  return (
    <div className={classes.card}>

      <div className={classes.upperContainer}>
        {displayingMyPokedex ? (
          <div>
            <IconButton
              onClick={() => deletePokemonHandler({ id: pokemon.id })}
              className={classes.buttons}
            >
              <HighlightOffIcon fontSize="large" />
            </IconButton>
          </div>
        ) : (
          <div>
            {pokemonSaved ? (
              <IconButton className={classes.likedButton}>
                <FavoriteIcon fontSize="large" />
              </IconButton>
            ) : (
              <IconButton
                onClick={(e) => {
                  addPokemonHandler(e, pokemon);
                  setPokemonSaved(true);
                }}
                className={classes.buttons}
              >
                <FavoriteBorderIcon fontSize="large" />
              </IconButton>
            )}
          </div>
        )}

        <div>
          <img
            src={
              displayingMyPokedex
                ? pokemon.image
                : pokemon.sprites.front_default
            }
            alt="Pokemon"
            width="100px"
            className={classes.imageContainer}
          />
        </div>
      </div>

      <div className={classes.lowerContainer}>
        <Typography className={classes.name}>
          {pokemon.name}
          <Chip
            className={classes.hp}
            label={
              displayingMyPokedex
                ? `HP: ${pokemon.hp.base_stat}`
                : `HP: ${pokemon.stats[0].base_stat}`
            }
          />
        </Typography>
        <Divider variant="middle" />

        <Typography className={classes.header}>Types</Typography>
        <div className={classes.pillContainer}>
          {pokemon.types.map((type) => (
            <Chip
              icon={<MergeTypeIcon />}
              color="primary"
              label={type.type.name}
              className={classes.types}
            />
          ))}
        </div>
        <Divider variant="middle" />

        <Typography className={classes.header}>Abilities</Typography>
        <div className={classes.pillContainer}>
          {pokemon.abilities.map((ability) => (
            <Chip
              icon={<FlashOnIcon />}
              color="primary"
              label={ability.ability.name}
              className={classes.types}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  pokemon: PropTypes.object.isRequired,
  deletePokemonHandler: PropTypes.func.isRequired,
  isSavedPokemon: PropTypes.bool,
  addPokemonHandler: PropTypes.func,
  pokemonSaved: PropTypes.bool,
  setPokemonSaved: PropTypes.func,
};

export default Card;