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
    width: 300,
    height: 430,
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 1px 10px 1px black",
    alignContent: "center",
    border: "5px solid black",
    textTransform: "uppercase",
  },
  upperContainer: {
    height: "100px",
    background: "#F73718",
  },
  imageContainer: {
    background: "white",
    borderRadius: "50%",
    border: "5px solid black",
    transform: "translate(95px,45px)",
  },
  lowerContainer: {
    background: "white",
    textAlign: "center",
    marginTop: "60px",
  },
  typesContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    margin: 0,
    padding: "0px 0px 10px",
  },
  types: {
    margin: "5px",
    backgroundColor: "#F73718",
    fontSize: "15px",
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
            // height="100px"
            width="100px"
            className={classes.imageContainer}
          />
        </div>
      </div>
      <div className={classes.lowerContainer}>
        <Typography>{pokemon.name}</Typography>
        <Divider variant="middle" />
        <Typography className={classes.header}>Types</Typography>
        <div className={classes.typesContainer}>
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
        <div className={classes.typesContainer}>
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
