import React from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types"; // ES6
import Chip from "@material-ui/core/Chip";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import MergeTypeIcon from "@material-ui/icons/MergeType";
import Divider from "@material-ui/core/Divider";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    width: 320,
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 1px 10px 1px black",
    alignContent: "center",
    border: "5px solid black",
    textTransform: "uppercase",
    marginTop: '1rem'
  },
  upperContainer: {
    height: "100px",
    background: "#F73718",
  },
  imageContainer: {
    background: "white",
    borderRadius: "50%",
    border: "5px solid black",
    transform: "translate(105px,45px)",
  },
  lowerContainer: {
    background: "white",
    textAlign: "center",
    marginTop: "60px",
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
    border: '3px solid #CC0000',
    padding: 5,
    fontSize: 15,
  },
  header: {
    fontSize: 20,
    margin: 0,
    paddingTop: 10
  }
});

const Card = ({ pokemon }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.upperContainer}>
        <div>
          <img
            src={pokemon.image}
            alt="Pokemon"
            width="100px"
            className={classes.imageContainer}
          />
        </div>
      </div>
      <div className={classes.lowerContainer}>
        <Typography>{pokemon.name}</Typography>
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
};

export default Card;
